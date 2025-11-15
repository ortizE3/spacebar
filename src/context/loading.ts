import { createContext } from 'react';
import type { LoadingPageType } from '../models/ContextType/LoadingPageType';

const defaultContextVal: LoadingPageType = {
    loadingPage: false,
    setLoadingPage: () => { }
}

const LoadingPage = createContext(defaultContextVal);

export default LoadingPage;