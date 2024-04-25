import axios from "axios";
import { atomFamily, selectorFamily } from "recoil";

export const todoAtomFamily = atomFamily({
  key: "todoAtomFamily",
  default: selectorFamily({
    key: "selectorFamily",
    get: function (id) {
      return async ({ get }) => {
        await new Promise(r=>setTimeout(r, 3000))
        const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);
        return  res.data.todo
      };
    },
  }),
});
