export function setLocalStorage(key: string, value: any) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getLocalStorage(key: string, json: boolean = true) {
  let item = localStorage.getItem(key) || "{}";
  if (json) return JSON.parse(item);
  return item;
}

export function setSessionStorage(key: string, value: any) {
  sessionStorage.setItem(key, JSON.stringify(value));
}

export function getSessionStorage(key: string, json: boolean = true) {
  let item = sessionStorage.getItem(key) || "{}";
  if (json) return JSON.parse(item);
  return item;
}
