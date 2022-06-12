const { app, ipcMain, Menu, BrowserWindow } = require('electron');
const path = require('path');

let changeTop = false;
const version = '1.0.0';

// Menu
const template = [
    {
        label: 'Hilfe',
        submenu: [
            {
                label: 'SAP Hilfe',
                click: async () => {
                const { shell } = require('electron')
                    await shell.openExternal('https://help.sap.com/docs/SAP_NETWEAVER_702/fe1b9b0e6c5510149c8680d5b2058e7f/f9e1a442dc030e31e10000000a1550b0.html?locale=de-DE')
                },
            }
        ]
    },
    {
        label: 'Info',
        submenu: [
            {
                label: 'Entwickler',
                click: async () => {
                const { shell } = require('electron')
                    await shell.openExternal('https://github.com/dkovac1993')
                },
            },
            { type: 'separator' },
            { 
                label: 'Version: ' + version
            }
        ]
    }
];

const menu = Menu.buildFromTemplate(template);

function createWindow () {

    let mainWindow = new BrowserWindow({
        width: 1024,
        height: 768,
        icon: __dirname + '/build/icon.ico',
        title: 'SAPTRAC - SAP Transaktionscodes',
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });

    mainWindow.loadFile('index.html');

    // Window
    mainWindow.setMinimumSize(1024, 768);

    // Open the DevTools.
    // mainWindow.webContents.openDevTools();

    ipcMain.on('alwaysOnTop', function (event, arg) {

        changeTop = arg;
        mainWindow.setAlwaysOnTop(arg);
    
    });

}

Menu.setApplicationMenu(menu);

app.whenReady().then(() => {

    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });

});

app.on('window-all-closed', () => {

    if (process.platform !== 'darwin') {
        app.quit()
    }

});