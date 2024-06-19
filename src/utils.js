export function mergeAttributes(elA, elB) {
    for (const { name, value } of elA.attributes) {
        elB.setAttribute(name, value)
    }

    return elB;
}