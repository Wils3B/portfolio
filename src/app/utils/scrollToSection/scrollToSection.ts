export const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ block: "start", behavior: "smooth" });
    setTimeout(() => window.location.hash = `#${id}`, 250);
  }
};
