import { app, BrowserWindow, ipcMain } from 'electron';
import * as path from 'path';
import * as ffi from 'ffi-napi';

let mainWindow: BrowserWindow | null;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  mainWindow.loadFile(path.join(__dirname, '../../public/index.html'));
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

const nativeLib = ffi.Library(path.join(__dirname, '../../NativeBackend.dll'), {
  'IncrementValue': ['void', []],
  'GetValue': ['int', []]
});


ipcMain.handle('get-value', () => {
  return nativeLib.GetValue();
});

ipcMain.handle('increment-value', () => {
  nativeLib.IncrementValue();
  return nativeLib.GetValue();
});


export { nativeLib };