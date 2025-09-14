export const theme = {
  colors: {
    primary: '#1677ff',
    background: '#03040cff',
    text: '#ebe8e8ff',
    ash: '#4fc3f7',
    brock: '#a1887f',
    misty: '#dbbc3dff',
    buttonActive: '#2b2a2a',
    button: '#161313ff',
  },
} as const;

export type ThemeType = typeof theme;
