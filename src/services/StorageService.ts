export class StorageService {
  static getItem(key: string): string | null {
    return localStorage.getItem('wtd-' + key);
  }

  static setItem(key: string, value: string): void {
    localStorage.setItem('wtd-' + key, value);
  }
}