const { app, BrowserWindow } = require('electron')
let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 730,
    height: 217,
    frame: false,
    fullscreenable: false,
    alwaysOnTop: true,
    icon: "icon.png",
    resizable: true,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    }
  })

  mainWindow.loadFile('app/index.html');

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', function() {
    createWindow();
})