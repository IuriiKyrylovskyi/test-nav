import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import { Routes } from './interfaces/global';

const loadUrl = MAIN_WINDOW_VITE_DEV_SERVER_URL + '/#' + Routes.FREQUENCY;
const rendererLoadUrlIndex = `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`;
const rendererLoadUrl = `${rendererLoadUrlIndex}/#${Routes.FREQUENCY}`;

let mainWindow: BrowserWindow;
let secondWindow: BrowserWindow;
const windows = new Set();

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1800,
    height: 300,
    x: 0,
    y: 0,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      webSecurity: false,
      plugins: true,
    },
  });

  // and load the index.html of the app.
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(path.join(__dirname, rendererLoadUrlIndex));
  }

  windows.add(mainWindow);

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
};

const createSecondWindow = () => {
  // Create the browser window.
  secondWindow = new BrowserWindow({
    width: 1800,
    height: 430,
    x: 0,
    y: 325,
    webPreferences: {
      preload: path.join(__dirname, 'preload.ts'),
      webSecurity: false,
      plugins: true,
    },
    parent: mainWindow,
  });

  // // and load the index.html of the app.
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    secondWindow.loadURL(loadUrl);
  } else {
    secondWindow.loadFile(path.join(__dirname, rendererLoadUrl));
  }

  windows.add(secondWindow);

  // Open the DevTools.
  secondWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
  createWindow();
  createSecondWindow();
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
    createSecondWindow();
  }
});

ipcMain.on('vuex-mutation', (event, mutation) => {
  // currently only 1 window, but if you require multiple windows
  // you can store them in an array and loop over all the items
  secondWindow.webContents.send('vuex-scoreboard-mutation', mutation);
});
