// Copyright (c) 2024 RAMPAGE Interactive
// Written by vq9o

import { app, BrowserWindow, ipcMain } from 'electron';
import * as path from 'path';
import { installDependencies, uninstallDependencies, updateDependencies } from './install';

let mainWindow: BrowserWindow | null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
    },
  });

  mainWindow.loadFile(path.join(__dirname, 'ui/index.html'));

  ipcMain.handle('install', async () => {
    return await installDependencies();
  });

  ipcMain.handle('uninstall', async () => {
    return await uninstallDependencies();
  });

  ipcMain.handle('update', async () => {
    return await updateDependencies();
  });
}

app.on('ready', createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
