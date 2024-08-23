// pages/_app.js
import '../styles/global.css';
import { ArticlesProvider } from '../context/ArticlesContext';

function MyApp({ Component, pageProps }) {
    return (
        <ArticlesProvider>
            <Component {...pageProps} />
        </ArticlesProvider>
    );
}

export default MyApp;