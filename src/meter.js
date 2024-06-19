import { mergeAttributes, $, C } from "./utils"

export const MetrePolyfill = (els = $('metre'), el, nm) => {
    for (el of els) {
        nm = mergeAttributes(el, C('meter'));
        el.insertAdjacentElement('afterend', nm);
        el.remove();
    }
}