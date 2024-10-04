import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electron', {
  incrementValue: () => ipcRenderer.invoke('increment-value'),
  getValue: () => ipcRenderer.invoke('get-value'),
});