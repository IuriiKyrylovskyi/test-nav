import { app, BrowserWindow } from 'electron';
import path from 'path';
import { Routes } from './interfaces/global';

const loadUrl = MAIN_WINDOW_VITE_DEV_SERVER_URL + '/#' + Routes.FREQUENCY;
const rendererLoadUrlIndex = `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`;
const rendererLoadUrl = `${rendererLoadUrlIndex}/#${Routes.FREQUENCY}`;

let mainWindow: BrowserWindow;
const windows = new Set();

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1800,
    height: 200,
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
  const secondWindow = new BrowserWindow({
    width: 1800,
    height: 400,
    x: 0,
    y: 225,
    webPreferences: {
      preload: path.join(__dirname, 'preload.ts'),
      webSecurity: false,
      plugins: true,
    },
    // parent: mainWindow,
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

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
