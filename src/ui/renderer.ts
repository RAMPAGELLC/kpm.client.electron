// Copyright (c) 2024 RAMPAGE Interactive
// Written by vq9o

const api = window.electron;
const consoleOutput = document.getElementById('consoleOutput');

function addConsoleLine(prefix: string, message: string, className: string = '') {
  const pre = document.createElement('pre');
  pre.dataset.prefix = prefix;
  const code = document.createElement('code');
  if (className) {
    code.className = className;
  }
  code.innerText = message;
  pre.appendChild(code);
  consoleOutput?.appendChild(pre);
}

function clearConsole() {
  consoleOutput!.innerHTML = '<pre data-prefix="$"><code>Ready for action...</code></pre>';
}

document.getElementById('installBtn')?.addEventListener('click', async () => {
  clearConsole();
  addConsoleLine('$', 'npm i -g kpm.client');
  addConsoleLine('>', 'installing...', 'text-warning');
  try {
    const result = await api.invoke('install');
    addConsoleLine('>', 'Done!', 'text-success');
    addConsoleLine('$', result);
  } catch (error) {
    addConsoleLine('>', 'Error!', 'bg-warning text-warning-content');
    addConsoleLine('$', String(error));
  }
});

document.getElementById('uninstallBtn')?.addEventListener('click', async () => {
  clearConsole();
  addConsoleLine('$', 'npm uninstall -g kpm.client');
  addConsoleLine('>', 'uninstalling...', 'text-warning');
  try {
    const result = await api.invoke('uninstall');
    addConsoleLine('>', 'Done!', 'text-success');
    addConsoleLine('$', result);
  } catch (error) {
    addConsoleLine('>', 'Error!', 'bg-warning text-warning-content');
    addConsoleLine('$', String(error));
  }
});

document.getElementById('updateBtn')?.addEventListener('click', async () => {
  clearConsole();
  addConsoleLine('$', 'kpm npm');
  addConsoleLine('>', 'updating...', 'text-warning');
  try {
    const result = await api.invoke('update');
    addConsoleLine('>', 'Done!', 'text-success');
    addConsoleLine('$', result);
  } catch (error) {
    addConsoleLine('>', 'Error!', 'bg-warning text-warning-content');
    addConsoleLine('$', String(error));
  }
});
