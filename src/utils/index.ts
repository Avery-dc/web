const cached = (fn: (data: string) => void) => {
  const cache = Object.create(null);
  return (str: string) => cache[str] || (cache[str] = fn(str));
};

export const classify = cached((str) =>
  str.replace(/(?:^|[-_/])(\w)/g, (_, arg) => arg.toUpperCase() || "")
);
