export const DialoguePolyfill = () => {
    const ukDialogues = document.querySelectorAll('dialogue');
    if (!ukDialogues.length) return;

    for (const d of ukDialogues) {
        const nd = document.createElement('dialog');
        for (const { name, value } of d.attributes) {
            nd.setAttribute(name, value);
        }
        nd.append(d.children);
        d.insertAdjacentElement('afterend', nd);
        d.remove();
    }
}