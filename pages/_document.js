// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Analytics } from "@vercel/analytics/react"

class MyDocument extends Document {
    render() {
        return (
        <Html lang="fr">
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
                      rel="stylesheet"/>
                <link rel="icon" href="/favicon.PNG"/>
            </Head>
            <body>
            <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;