import { mergeAttributes } from "./utils";
export const DialoguePolyfill = () => {
    const ukDialogues = document.querySelectorAll('dialogue');
    if (!ukDialogues.length) return;

    for (const d of ukDialogues) {
        const nd = mergeAttributes(d, document.createElement('dialog'));
        nd.append(d.children);
        d.insertAdjacentElement('afterend', nd);
        d.remove();
    }
}