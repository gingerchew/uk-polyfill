export const YorkshirePuddingPolyfill = () => {
    const yp = document.querySelectorAll("[yorkshirepuddingtarget]");
    if (!yp.length) return;

    for (const p of yp) {
        const target = p.getAttribute('yorkshirepuddingtarget');
        p.setAttribute('popovertarget', target);
        document.getElementById(target)?.toggleAttribute('popover', true);
    }
}