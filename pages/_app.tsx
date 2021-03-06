
import React from 'react';
import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';
import Router from 'next/router';
import '../styles/globals.css';
import ym from 'react-yandex-metrika';
import { YMInitializer } from 'react-yandex-metrika';

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {

	Router.events.on('routeChangeComplete', (url: string) => {
		if (typeof window !== 'undefined') {
			ym('hit', url);
		}
	});

	return <>
		<Head>
			<title>Next App</title>
			<link rel="icon" href="/favicon.ico" />
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link rel="preconnect" href="https://mc.yandex.ru" />
			<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Display:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
			<meta property="og:url" content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath} />
			<meta property="og:locale" content="ru_RU" />
		</Head>
		<YMInitializer
			accounts={[]} // массив счетчиков ям
			options={{ webvisor: true, defer: true }}
			version="2"
		/>
		<Component {...pageProps} />
	</>;
}

export default MyApp;
