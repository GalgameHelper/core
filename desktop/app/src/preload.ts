// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const { contextBridge,ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('appApi', {
    // 这里注意避免将ipcRenderer等致命api直接挂载在window上，可能会导致安全问题
    close: (msg:string) => ipcRenderer.send(msg)
})