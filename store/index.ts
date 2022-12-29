import { makeAutoObservable } from 'mobx';

class Storage {
  constructor() {
    makeAutoObservable(this);
  }

  lang: 'ru' | 'en' = 'ru';
  changeLang = () => {
    switch (this.lang) {
      case 'ru':
        this.lang = 'en';
        break;
      case 'en':
        this.lang = 'ru';
        break;
    }
  };

  isDark = true;
  changeTheme = () => {
    this.isDark = !this.isDark;
  };
}

export const store = new Storage();
