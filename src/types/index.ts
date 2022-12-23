import * as electron from "electron";

export interface IError {
  code?: null | number;
  message?: null | string;
  details?: null | string;
  type?: null | string;
  channel?: null | string;
}

export interface IIPC {
    error: IError;
    data: any
}

export interface IShowMessageBoxReturnValue {
  data: electron.MessageBoxReturnValue,
  error: IError
}

export interface ISaveDialogReturnValue {
  data: electron.SaveDialogReturnValue,
  error: IError
}

export enum Channel {
  ShowMessageBox = "electron/show-message-box",
  ShowSaveDialog = "electron/show-save-dialog",
  ShowOpenDialog = "electron/show-open-dialog",
  Menu = "electron/menu"
}
