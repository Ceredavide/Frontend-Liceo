export default function getContrastColor(hex) {

    let threshold = 130; /* about half of 256. Lower threshold equals more dark text on dark background  */

    let hRed = hexToR(hex);
    let hGreen = hexToG(hex);
    let hBlue = hexToB(hex);


    function hexToR(h) { return parseInt((cutHex(h)).substring(0, 2), 16) }
    function hexToG(h) { return parseInt((cutHex(h)).substring(2, 4), 16) }
    function hexToB(h) { return parseInt((cutHex(h)).substring(4, 6), 16) }
    function cutHex(h) { return (h.charAt(0) == "#") ? h.substring(1, 7) : h }

    let cBrightness = ((hRed * 299) + (hGreen * 587) + (hBlue * 114)) / 1000;
    if (cBrightness > threshold) {
        return "#000000";
    } else {
        return "#ffffff";
    }
}
