export const cn = (baseCn: string, ...otherCns: (string | Record<string, boolean>)[]): string => {
  const resultCn = [baseCn];
  otherCns.forEach((otherCn): void => {
    if (typeof otherCn === 'string') {
      resultCn.push(otherCn);
    } else {
      for (const key in otherCn) {
        if (otherCn[key]) {
          resultCn.push(key);
        }
      }
    }
  });
  return resultCn
    .map((cn) => cn.replace(/\s+/g, ''))
    .filter((cn) => !!cn)
    .join(' ');
};
