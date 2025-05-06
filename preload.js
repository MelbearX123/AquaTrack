const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  openPopup: () => ipcRenderer.send('open-popup'),
  sendParameters: (parameters) => ipcRenderer.send('send-parameters', parameters),
  closeWindow: () => ipcRenderer.send('close-popup')
});

window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})