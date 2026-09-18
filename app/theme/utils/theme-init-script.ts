import { StorageKeys } from '~/constants/storage-keys';
import { Themes } from '~/theme/Theme.interface';

export const THEME_INIT_SCRIPT = `(function(){try{var s=localStorage.getItem('${StorageKeys.POKEDEX_THEME}');var t=s==='${Themes.LIGHT}'||s==='${Themes.DARK}'?s:(window.matchMedia('(prefers-color-scheme: dark)').matches?'${Themes.DARK}':'${Themes.LIGHT}');document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;
