import { QueryClientProvider } from '@tanstack/react-query';
import type { PropsWithChildren } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';
import i18n from '~/lib/i18n';
import { queryClient } from '~/lib/queryClient';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <head>
        <script
          id="runtime-config"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: '"__RUNTIME_CONFIG_PLACEHOLDER__"',
          }}
        />

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

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

const Root = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18n}>
        <Outlet />
      </I18nextProvider>
    </QueryClientProvider>
  );
};

export default Root;
