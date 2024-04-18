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

export const notificationsAtom = atom({
    key: "notificationsAtom",
    default: {
        network:0,
        jobs: 0,
        messaging:0,
        notifications:0
    }
})


export const notificationsSelector = selector({
    key: "notificationSelector",
    get: ({get})=>{
        const allNotifications = get(notificationsAtom)
        return allNotifications.jobs + allNotifications.messaging+ allNotifications.network + allNotifications.notifications
    }
})

// async data queries
// well what will happen in above code it will fetch
// the data from backend and update the notiFication atom.
// meanwhile data fetching the default value of atom will be rendered to frontend 
// so to avoid this we need to use async data queries