import { mergeAttributes, $, C } from "./utils";

export const DialoguePolyfill = (ukDialogues = $('dialogue'), d, nd) => {
    for (d of ukDialogues) {
        nd = mergeAttributes(d, C('dialog'));
        nd.append(d.children);
        d.insertAdjacentElement('afterend', nd);
        d.remove();
    }
}