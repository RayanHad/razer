import { app, BrowserWindow, ipcMain } from 'electron';
import * as path from 'path';
import * as ffi from 'ffi-napi';
import * as fs from 'fs';

let mainWindow: BrowserWindow | null;
let nativeLib: any;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
      webSecurity: false,
    },
  });

  mainWindow.loadFile(path.join(__dirname, '../index.html'));

};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

if (!app.isPackaged) {
  nativeLib = ffi.Library(path.join('native', 'NativeBackend.dll'), {
    'IncrementValue': ['void', []],
    'GetValue': ['int', []]
  });
} else {
  nativeLib = ffi.Library(path.join(process.resourcesPath, 'native', 'NativeBackend.dll'), {
    'IncrementValue': ['void', []],
    'GetValue': ['int', []]
  });
}

ipcMain.handle('get-value', () => {
  return nativeLib.GetValue();
});

ipcMain.handle('increment-value', () => {
  nativeLib.IncrementValue();
  return nativeLib.GetValue();
});


export { nativeLib };