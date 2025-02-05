// pages/_app.js
import { ArticlesProvider } from '../context/ArticlesContext';
import '../styles/global.css';
import { Analytics } from "@vercel/analytics/react"

function MyApp({ Component, pageProps }) {
    return (
        <ArticlesProvider>
            <Component {...pageProps} />
            <Analytics />
        </ArticlesProvider>
    );
}

export default MyApp;