import { $ } from './utils';
const targetStr = 'yorkshirepuddingtarget';

export const YorkshirePuddingPolyfill = (yp = $(`[${targetStr}]`), p, target) => {
    for (p of yp) {
        target = p.getAttribute(targetStr);
        p.setAttribute('popovertarget', target);
        document.getElementById(target)?.toggleAttribute('popover', true);
    }
}