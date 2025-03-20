import { useEffect, useState } from "react";
import { useLoad } from "./LoadContext";
import { Image, ImageStyle } from "react-native";
import styled from "styled-components/native";

interface LazyImageProps {
    source: string;
    style?: ImageStyle;
    resizeMode?: "cover" | "contain" | "stretch" | "repeat" | "center";
}

const StyledImage = styled(Image)({
    width: "100%",
    height: "100%"
})

export const LazyImage: React.FC<LazyImageProps> = ({ source, style, resizeMode }) => {
    const { loadedImages, markImageLoaded, markImageUnloaded } = useLoad();
    const [isLoad, setIsLoad] = useState<boolean>(false);
    const [blurAmount, setBlurAmount] = useState<number>(10);

    useEffect(() => {
        if (loadedImages.has(source)) {
            setIsLoad(true)
            setBlurAmount(0);
        }
        return () => {
            markImageUnloaded(String(source));
        }
    }, [loadedImages, source, markImageUnloaded])

    const handleLoad = () => {
        markImageLoaded(source);
        setTimeout(() => {
            setIsLoad(true);
            setBlurAmount(0);
        }, 1000)
    }

    return (
        <StyledImage
            source={source}
            style={[style, {opacity: isLoad ? 1 : 0.3}]}
            onLoad={handleLoad}
            blurRadius={blurAmount}
            resizeMode={resizeMode}
        />
    )
}