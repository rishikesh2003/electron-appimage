const { app, BrowserWindow } = require("electron");

app.on("ready", () => {
  const win = new BrowserWindow({
    autoHideMenuBar: true,
    icon: __dirname + "/icon.png",
  });
  win.maximize();
  win.loadURL("https://notion.so");
});
