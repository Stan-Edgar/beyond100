// src/icons.js
// Works in Vite: import.meta.glob with eager import, safe handling of module shape,
// and automatic camelCase keys (first letter lowercased).
const modules = import.meta.glob('./assets/icons/*.svg', { eager: true });

const toCamelCase = (str) => {
  const base = str.replace(/\.[^/.]+$/, '');                // remove extension
  const camel = base.replace(/[-_\s]+(.)/g, (_, c) => c.toUpperCase());
  return camel.charAt(0).toLowerCase() + camel.slice(1);    // lower-case first char
};

const icons = Object.fromEntries(
  Object.entries(modules).map(([path, mod]) => {
    const file = path.split('/').pop();                      // e.g. "Coin.svg"
    const key = toCamelCase(file);                           // e.g. "coin" or "customerObs"
    const url = (mod && mod.default) ? mod.default : mod;   // supports both shapes
    return [key, url];
  })
);

export default icons;
