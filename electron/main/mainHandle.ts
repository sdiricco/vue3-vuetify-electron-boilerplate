import { ipcMain, BrowserWindow, dialog } from "electron";
import { IError, Channel } from "../types";

export function sendToClient(win: BrowserWindow, channel = "", data) {
  win.webContents.send(channel, data);
}

/*************************************************************************************/
/* DIALOGs API */
/*************************************************************************************/
export function handleDialogs(win: BrowserWindow) {
  /* SHOW MESSAGE BOX */
  ipcMain.handle(Channel.ShowMessageBox, async (_evt, data) => {
    const result = {
      data: null,
      error: null
    }
    const error: IError = {
      code: 0,
      message: "Error during opening message box dialog electron API",
      details: '',
      type: "electron",
      channel: Channel.ShowMessageBox,
    };
    try {
      result.data = await dialog.showMessageBox(win, data)
    } catch (e) {
      result.error = {...error, ...{details: e.message} }
    }
    return result;
  });
}
