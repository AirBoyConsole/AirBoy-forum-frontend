import Storage from "../../usecases/ports/storage";

export class CookiesHandler implements Storage {

  public get(key: string): string {

    const name = key + "=";
    const ca = document.cookie.split(';');

    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];

      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }

      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }

  public save(key: string, value: string): void {
    const d = new Date();
    d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = key + "=" + value + ";" + expires + ";path=/";
  }
}
