// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
// import { app, BrowserWindow } from 'electron'

import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('electron', {
  send: (type: string)=>{
    console.log(`send: ${type}`)
    ipcRenderer.send(type)
  }

})
