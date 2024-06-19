import { DialoguePolyfill } from "./dialog";
import { YorkshirePuddingPolyfill } from "./popover";
import { MetrePolyfill } from "./meter";
import { MathsPolyfill } from "./math";

export const innit = () => {
    DialoguePolyfill();
    YorkshirePuddingPolyfill();
    MetrePolyfill();
    MathsPolyfill();
}

export {
    DialoguePolyfill,
    YorkshirePuddingPolyfill,
    MetrePolyfill,
    MathsPolyfill
}