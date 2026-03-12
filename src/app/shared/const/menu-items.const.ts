export interface INavConst {
  text: string;
  iconUrl: string;
  iconUrlActive: string;
  link: string;
  id: number;
}

export const NAV_CONST: INavConst[] = [
  {
    text: 'Главная',
    iconUrl: 'icons/menu/dashboard.svg',
    iconUrlActive: 'icons/menu/dashboard-active.svg',
    link: '/private/dashboard',
    id: 0,
  },
  {
    text: 'Мои монеты',
    iconUrl: 'icons/menu/wallet.svg',
    iconUrlActive: 'icons/menu/wallet-active.svg',
    link: '/private/assets',
    id: 1,
  },
  {
    text: 'Курсы',
    iconUrl: 'icons/menu/rates.svg',
    iconUrlActive: 'icons/menu/rates-active.svg',
    link: '/private/rates',
    id: 2,
  },
  {
    text: 'Обмен',
    iconUrl: 'icons/menu/exchange.svg',
    iconUrlActive: 'icons/menu/exchange-active.svg',
    link: '/private/exchange',
    id: 3,
  },
];
