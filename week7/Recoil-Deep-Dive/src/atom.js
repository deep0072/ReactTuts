import { atom, selector } from "recoil";

export const mynetworkAtom = atom({
    key:"mynetworkAtom",
    default:102
})

export const jobsAtom = atom({
    key:"jobsAtom",
    default:0
})
export const messagingAtom = atom({
    key:"messagingAtom",
    default:0
})
export const notificationAtom = atom({
    key:"notificationAtom",
    default:12
})



export const totalNotificationCountSelector = selector({
    key:"totalNotificationCountSelector",
    get: ({get})=>{
        const networkCount = get(mynetworkAtom)
        const jobCount = get(jobsAtom)
        const messagingCount = get(messagingAtom)
        const notificationCount = get(notificationAtom)
        return networkCount + jobCount + messagingCount + notificationCount
    }
})


// we can write all notifications in single Atom like this 

// export const notificationsAtom = Atom({
//     key: "notificationsAtom",
//     default: {
//         network:102,
//         jobs: 0,
//         messaging:0,
//         notifications:12
//     }
// })


// export const notificationsSelector = selector({
//     key: "notificationSelector",
//     get: ({get})=>{
//         const notifications = get(notificationsAtom)
//         return notifications.jobs + notifications.messaging+ notifications.network + notifications.notifications
//     }
// })