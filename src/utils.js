export const mergeAttributes = (elA, elB) => (Array.from(elA.attributes, ({ name, value }) => elB.setAttribute(name,value)), elB);

export const $ = document.querySelectorAll.bind(document);
export const C = document.createElement;