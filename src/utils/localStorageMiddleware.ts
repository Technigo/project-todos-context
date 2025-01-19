export const localStorageMiddleware = (key: string) => (config: any) => (set: any, get: any, api: any) =>
  config(
    (...args: any[]) => {
      const result = set(...args);
      const state = get();
      localStorage.setItem(key, JSON.stringify(state));
      return result;
    },
    get,
    api
  );
