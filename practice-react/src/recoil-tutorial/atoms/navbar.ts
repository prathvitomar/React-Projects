import { atom, selector } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: 94,
});

export const jobAtom = atom({
  key: "jobAtom",
  default: 23,
});

export const notitficationAtom = atom({
  key: "notificationAtoms",
  default: 45,
});

export const messagingAtom = atom({
  key: "messagingAtom",
  default: 100,
});

export const totalNotificationAtom = selector({
  key: "totalNotificationAtom",
  get: ({ get }) => {
    return (
      get(networkAtom) +
      get(jobAtom) +
      get(notitficationAtom) +
      get(messagingAtom)
    );
  },
});
