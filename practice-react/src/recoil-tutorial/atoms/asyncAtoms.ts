import { atom, selector } from "recoil";

const mockAPI = new Promise((resolve) => {
  setTimeout(() => {
    resolve({
      json: () =>
        Promise.resolve({
          network: 100,
          job: 23,
          notification: 3,
          messaging: 4,
        }),
    });
  }, 1000);
});

export const notificationCount = atom({
  key: "notificationCount",
  default: {
    network: 0,
    job: 0,
    notification: 0,
    messaging: 0,
  },
});

// Asynchoronusly Fetching Value from API.
export const notificationCountAsync = atom({
  key: "notificationCountAsync",
  default: selector({
    key: "notificationAsync",
    get: async () => {
      const res = await mockAPI;
      const data = await res.json();
      return data;
    },
  }),
});

export const notificationAsyncValues = selector({
  key: "notificationAsyncValues",
  get: ({ get }) => {
    const allValues = get(notificationCountAsync);
    return (
      allValues.network +
      allValues.job +
      allValues.notification +
      allValues.messaging
    );
  },
});
