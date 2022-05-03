export const APP_STATE: AppState = {
  language: (localStorage.getItem('language') as any) || 'zh_CN',
  theme: (localStorage.getItem('theme') as any) || 'dark',
};

export interface AppState {
  readonly language: 'zh_CN' | 'en_US';
  readonly theme: 'dark' | 'light';
}
