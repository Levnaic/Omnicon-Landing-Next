export const scrollTo = (selector: string) => {
  const el = document.querySelector(selector);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  if (selector.startsWith("#")) history.replaceState(null, "", selector);
};
