import React, { useMemo } from 'react';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import createEmotionCache from '../util/createEmotionCache';
import mainTheme from '../styles/theme/mainTheme';
import MainNavbar from '@/components/navbar/MainNavbar';
import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';
import English from '../locales/en.json';
import Spanish from '../locales/es.json';

const clientSideEmotionCache = createEmotionCache();

const MyApp = ({ Component, emotionCache = clientSideEmotionCache, pageProps }) => {
    const { locale } = useRouter();
    const [shortLocale] = locale ? locale.split("-") : ["en"];
    const messages = useMemo(() => {
      switch (shortLocale) {
        case "en": return English;
        case "es": return Spanish;
        default: return English;
      }
    }, [shortLocale])

  return (
    <CacheProvider value={emotionCache}>
      <IntlProvider locale={shortLocale} messages={messages} onError={() => null}>
        <ThemeProvider theme={mainTheme}>
          <CssBaseline />
          <MainNavbar />
          <Component {...pageProps} />
        </ThemeProvider>
      </IntlProvider>
    </CacheProvider>
  );
};

export default MyApp;
