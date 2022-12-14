"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEncodedImage = exports.useImages = exports.getInitialState = exports.createImageMap = exports.PreloadedState = void 0;
const react_1 = require("react");
const fast_equals_1 = require("fast-equals");
var PreloadedState;
(function (PreloadedState) {
    PreloadedState[PreloadedState["LOADING"] = 0] = "LOADING";
    PreloadedState[PreloadedState["LOADED"] = 1] = "LOADED";
    PreloadedState[PreloadedState["ERROR"] = 2] = "ERROR";
    PreloadedState[PreloadedState["NULL"] = 3] = "NULL";
})(PreloadedState = exports.PreloadedState || (exports.PreloadedState = {}));
const createImageMap = (urls) => {
    const images = new Map();
    if (urls instanceof Array) {
        urls.filter((url) => !!url).forEach((url) => images.set(url, url));
    }
    else {
        Object.keys(urls)
            .filter((key) => key in urls)
            .forEach((key) => images.set(key, urls[key]));
    }
    return images;
};
exports.createImageMap = createImageMap;
const getInitialState = (images) => {
    const initialState = new Map();
    images.forEach((url, key) => initialState.set(key, { image: null, state: url ? PreloadedState.LOADING : PreloadedState.NULL, url: url }));
    return initialState;
};
exports.getInitialState = getInitialState;
const useImages = (urls, crossOrigin) => {
    const [images, setImages] = (0, react_1.useState)((0, exports.createImageMap)(urls));
    const prevUrlsRef = (0, react_1.useRef)(null);
    const [imagestates, setImageState] = (0, react_1.useState)((0, exports.getInitialState)(images));
    (0, react_1.useEffect)(() => {
        images.forEach((url, key) => {
            if (!url)
                return;
            const img = document.createElement("img");
            img.onload = () => {
                setImageState((state) => {
                    const newState = new Map(state);
                    newState.set(key, { image: img, state: PreloadedState.LOADED, url: url });
                    return newState;
                });
            };
            img.onerror = () => {
                setImageState((state) => {
                    const newState = new Map(state);
                    newState.set(key, { image: null, state: PreloadedState.ERROR, url: url });
                    return newState;
                });
            };
            if (crossOrigin)
                img.crossOrigin = crossOrigin;
            img.src = url;
        });
        return () => {
            images.forEach((url, key) => {
                if (!url)
                    return;
                const img = imagestates.get(key).image;
                if (img) {
                    img.onload = null;
                    img.onerror = null;
                }
            });
        };
    }, [images, crossOrigin]);
    (0, react_1.useEffect)(() => {
        if (!(0, fast_equals_1.shallowEqual)(prevUrlsRef.current, urls)) {
            prevUrlsRef.current = urls;
            const newImages = (0, exports.createImageMap)(urls);
            setImages(newImages);
            setImageState((0, exports.getInitialState)(newImages));
        }
    }, [urls]);
    return imagestates;
};
exports.useImages = useImages;
const isEncodedImage = (url) => {
    if (!url)
        return false;
    return url.startsWith("data:image");
};
exports.isEncodedImage = isEncodedImage;
