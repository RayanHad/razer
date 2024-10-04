export {};

declare global {
  interface Window {
    electron: {
      incrementValue: () => Promise<void>;
      getValue: () => Promise<number>;
    }
  }
}