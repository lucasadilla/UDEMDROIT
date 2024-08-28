// pages/_app.js
import { ArticlesProvider } from '../context/ArticlesContext';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
    return (
        <ArticlesProvider>
            <Component {...pageProps} />
        </ArticlesProvider>
    );
}

export default MyApp;