import axios from "axios";
import { atom, selector } from "recoil";

// export const mynetworkAtom = atom({
//     key:"mynetworkAtom",
//     default:102
// })

// export const jobsAtom = atom({
//     key:"jobsAtom",
//     default:0
// })
// export const messagingAtom = atom({
//     key:"messagingAtom",
//     default:0
// })
// export const notificationAtom = atom({
//     key:"notificationAtom",
//     default:12
// })

// export const totalNotificationCountSelector = selector({
//     key:"totalNotificationCountSelector",
//     get: ({get})=>{
//         const networkCount = get(mynetworkAtom)
//         const jobCount = get(jobsAtom)
//         const messagingCount = get(messagingAtom)
//         const notificationCount = get(notificationAtom)
//         return networkCount + jobCount + messagingCount + notificationCount
//     }
// })

// we can write all notifications in single Atom like this

// export const notificationsAtom = atom({
//     key: "notificationsAtom",
//     default: {
//         network:0,
//         jobs: 0,
//         messaging:0,
//         notifications:0
//     }
// })
export const notificationsAtom = atom({
  key: "notificationsAtom",
  default: selector({
    key: "notificationsAtomSelector",
    get: async () => {
      const res = await axios.get(
        "https://sum-server.100xdevs.com/notifications"
      );

      // it is async call it means
      // data will fetch nad obviously it will take time
      // in this time atom state is empty
      // so it will render atom state when data arrived


      return res.data;
    },
  }),
});

export const notificationsSelector = selector({
  key: "notificationsSelector",
  get: ({ get }) => {
    const allNotifications = get(notificationsAtom);
    return (
      allNotifications.jobs +
      allNotifications.messaging +
      allNotifications.network +
      allNotifications.notifications
    );
  },
});
