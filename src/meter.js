import { mergeAttributes } from "./utils"
export const MetrePolyfill = () => {
    const els = document.querySelectorAll('metre');
    if (!els.length) return;

    for (const el of els) {
        const nm = mergeAttributes(el, document.createElement('meter'));
        el.insertAdjacentElement('afterend', nm);
        el.remove();
    }
}