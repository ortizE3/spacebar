import { useState } from "react";
import type { ContextProvider } from "../models/Props/ContextProvider";
import LoadingPage from "../context/loading";
import type { LoadingPageType } from "../models/ContextType/LoadingPageType";


export const LoadingPageProvider = (props: ContextProvider) => {

    const [loadingPage, setLoadingPage] = useState(false);

    const contextValue: LoadingPageType = {
        loadingPage,
        setLoadingPage
    }

    return (
        <LoadingPage.Provider value={contextValue}>
            {props.children}
        </LoadingPage.Provider>
    );
}