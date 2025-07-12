import { atomFamily, selectorFamily } from "recoil";
import { TODOS } from "../todos";

const mockAPI = new Promise((resolve) => {
  setTimeout(() => {
    resolve({
      json: () =>
        Promise.resolve([
          {
            id: 1,
            title: "First Todo",
            description: "First description",
            completed: true,
          },
          {
            id: 2,
            title: "Second Todo",
            description: "Second description",
            completed: false,
          },
          {
            id: 3,
            title: "Third Todo",
            description: "Third description",
            completed: true,
          },
          {
            id: 4,
            title: "Fourth Todo",
            description: "Fourth description",
            completed: false,
          },
        ]),
    });
  }, 1000);
});

export const atomFamilyValue = atomFamily({
  key: "atomFamilyValue",
  default: (id) => {
    return TODOS.find((t) => t.id === id);
  },
});

export const atomSelectorFamily = atomFamily({
  key: "atomSelectorFamily",
  default: selectorFamily({
    key: "selectorFamilyAtom",
    get: function (id) {
      return async function ({ get }) {
        // throw new Error("");
        const res = await mockAPI;
        const data = await res.json();
        return data.find((todo) => todo.id === id);
      };
    },
  }),
});
