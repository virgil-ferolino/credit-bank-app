import { createContext, useCallback, useContext, useMemo, useState } from "react";

interface LoadStateType {
    loadedPages: Set<string>;
    loadedImages: Set<string>;
    fetchData: (key:string) => Promise<void>
    markPageLoaded: (page: string) => void;
    markImageLoaded: (image: string) => void;
    markPageUnloaded: (page: string) => void;
    markImageUnloaded: (image: string) => void;
}

const LoadContext = createContext<LoadStateType | undefined>(undefined);

export const LoadProvider = ({ children }: { children: React.ReactNode }) => {
    const [loadedPages, setLoadedPages] = useState(new Set<string>());
    const [loadedImages, setLoadedImages] = useState(new Set<string>());

    const markPageLoaded = useCallback((page: string) => {
        setLoadedPages((prev) => new Set(prev).add(page))
    }, [])

    const fetchData = useCallback((key: string) => {
        return new Promise<void>((res) => {
            setTimeout(() => {
                setLoadedPages((prev) => {
                    const newSet = new Set(prev).add(key)
                    return newSet
                })
                res();
            }, 1500)
        })
    }, [])

    const markPageUnloaded = useCallback((page: string) => {
        setLoadedPages((prev) => {
            const newSet = new Set(prev);
            newSet.delete(page);
            return newSet;
        });
    }, [])

    const markImageLoaded = useCallback((image: string) => {
        setLoadedImages((prev) => new Set(prev).add(image));
    }, [])

    const markImageUnloaded = useCallback((image: string) => {
        setLoadedImages((prev) => {
            const newSet = new Set(prev);
            newSet.delete(image);
            return newSet;
        })
    }, [])

    const loadedValues = useMemo(() => ({
        loadedPages,
        loadedImages,
        fetchData,
        markPageLoaded,
        markImageLoaded,
        markPageUnloaded,
        markImageUnloaded,
    }), [loadedPages, loadedImages, fetchData, markPageLoaded, markImageLoaded, markPageUnloaded, markImageUnloaded])

    return(
        <LoadContext.Provider value={loadedValues}>
            {children}
        </LoadContext.Provider>
    );
};

export const useLoad = () => {
    const context = useContext(LoadContext);
    if (!context) throw new Error ("useLoad must be used within LoadProvider.");
    return context
}