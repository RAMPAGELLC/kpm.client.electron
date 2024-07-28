// Copyright (c) 2024 RAMPAGE Interactive
// Written by vq9o

import { exec } from 'child_process';

function runCommand(command: string): Promise<string> {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(`Error: ${error.message}\n${stderr}`);
        return;
      }
      resolve(stdout);
    });
  });
}

export async function installDependencies(): Promise<string> {
  try {
    await runCommand('npm i -g kpm.client');
    return 'Installation complete.';
  } catch (error) {
    return `Installation failed: ${error}`;
  }
}

export async function uninstallDependencies(): Promise<string> {
  try {
    await runCommand('npm uninstall -g kpm.client');
    return 'Uninstallation complete.';
  } catch (error) {
    return `Uninstallation failed: ${error}`;
  }
}

export async function updateDependencies(): Promise<string> {
  try {
    await runCommand('kpm npm');
    return 'Update complete.';
  } catch (error) {
    return `Update failed: ${error}`;
  }
}
