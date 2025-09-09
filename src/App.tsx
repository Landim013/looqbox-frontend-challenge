import { ConfigProvider } from 'antd';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/globalStyles';
import { theme } from './styles/theme';
// import { router } from './core/router';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <ConfigProvider theme={{ token: { colorPrimary: theme.colors.primary } }}>
        <GlobalStyle />
        {/* <RouterProvider router={"router"} /> */}
      </ConfigProvider>
    </ThemeProvider>
  );
}
