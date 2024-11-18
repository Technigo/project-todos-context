export const localStorageMiddleware = (key) => (config) => (set, get, api) =>
  config(
    (...args) => {
      const result = set(...args);
      const state = get();
      localStorage.setItem(key, JSON.stringify(state));
      return result;
    },
    get,
    api
  );
