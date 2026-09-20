import { QueryClientProvider } from '@tanstack/react-query';
import type { PropsWithChildren } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';
import SplashScreen from '~/components/components/SplashScreen/SplashScreen';
import ModalProvider from '~/components/providers/ModalProvider/ModalProvider';
import { env } from '~/constants/env';
import i18n from '~/lib/i18n';
import { queryClient } from '~/lib/queryClient';
import '~/styles/tokens.css';
import '~/styles/global.scss';
import ThemeProvider from '~/theme/ThemeProvider';
import { THEME_INIT_SCRIPT } from '~/theme/utils/theme-init-script';

const getOrigin = (url: string) => {
  try {
    return new URL(url).origin;
  } catch {
    return undefined;
  }
};

export const Layout = ({ children }: PropsWithChildren) => {
  const apiOrigin = getOrigin(env('VITE_API_URL'));
  const imagesOrigin = getOrigin(env('VITE_SERVE_IMAGES_URL'));

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          id="theme-init"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }}
        />
        <script
          id="runtime-config"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: '"__RUNTIME_CONFIG_PLACEHOLDER__"',
          }}
        />

        <title>Pokédex</title>

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="light dark" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Rubik:wght@400;500;600;700;800&family=VT323&display=swap"
        />

        {apiOrigin && (
          <link rel="preconnect" href={apiOrigin} crossOrigin="anonymous" />
        )}
        {imagesOrigin && <link rel="preconnect" href={imagesOrigin} />}

        <link
          rel="icon"
          type="image/png"
          href="/favicon/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />

        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
};

export const HydrateFallback = () => {
  return <SplashScreen />;
};

const Root = () => {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <I18nextProvider i18n={i18n}>
          <Outlet />
          <ModalProvider />
        </I18nextProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default Root;
