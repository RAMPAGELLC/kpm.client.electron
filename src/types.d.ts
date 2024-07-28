declare namespace Electron {
  interface IpcRenderer {
    invoke(channel: string, ...args: any[]): Promise<any>;
  }
}

interface Window {
  electron: Electron.IpcRenderer;
}
