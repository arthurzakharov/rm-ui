export function loadStylesheet(themeName: string): void {
  const styleLink = document.head.querySelector('link[data-dynamic-theme]');

  if (styleLink) {
    document.head.removeChild(styleLink);
  } else {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `vars/${themeName}.css`;
    link.setAttribute('data-dynamic-theme', themeName);
    document.head.appendChild(link);
  }
}

export function getThemes(): Record<string, string> {
  return Object.keys(import.meta.glob('../assets/vars/*.css', { eager: true }))
    .map((path) => {
      const match = path.match(/\/([\w-]+)\.css$/);
      return match ? match[1] : '';
    })
    .filter(Boolean)
    .reduce((r, n) => ({ ...r, [n]: n }), {});
}
