import axios from 'axios'
import { useEffect, useState } from 'react'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
// import { jobsAtom, messagingAtom, mynetworkAtom, notificationAtom, totalNotificationCountSelector } from './atom'

import { notificationsAtom, notificationsSelector } from './atom'


function App() {
  return <RecoilRoot>
 
    <MainApp />
  </RecoilRoot>
}

export default App


function MainApp(){
  // const networkAtomCount = useRecoilValue(mynetworkAtom)
  // const notificationAtomCount = useRecoilValue(notificationAtom)
  // const jobsAtomCount = useRecoilValue(jobsAtom)
  // const messagingAtomCount = useRecoilValue(messagingAtom)
  // const totalNotificationCount = useRecoilValue(totalNotificationCountSelector)
  const [notifications,setNotifications] = useRecoilState(notificationsAtom)
  const [allNotificationsCount] = useRecoilState(notificationsSelector)



  // useEffect(() => {
  //   axios.get("https://sum-server.100xdevs.com/notifications")
  //     .then(res=>{
  //       setNotifications(res.data)
  //     })

  // // 1. well what will happen in above code it will fetch
  // // 2. the data from backend and update the notiFication atom.
  // // 3. meanwhile data fetching the default value of atom will be rendered to frontend 
  // // 4. so to avoid this we need to use async data queries

  
    
  // }, [])


  
  
  return (
    <div>
     {/* <button>Home </button>
     <button>My network ({networkAtomCount > 100 ?  "99+": networkAtomCount})</button>
     <button>Jobs({jobsAtomCount > 100 ? "99+": jobsAtomCount}) </button>
     <button>Messaging({messagingAtomCount > 100 ? "99+": messagingAtomCount})  </button>
     <button>Notifications ({notificationAtomCount > 100 ? "99+" : notificationAtomCount})  </button>
     <button>Me ({totalNotificationCount}) </button>  */}
     <button>Home </button>
     <button>My network ({notifications.network > 100 ?  "99+": notifications.network})</button>
     <button>Jobs({notifications.jobs > 100 ? "99+": notifications.jobs}) </button>
     <button>Messaging({notifications.messaging > 100 ? "99+": notifications.messaging})  </button>
     <button>Notifications ({notifications.notifications > 100 ? "99+" : notifications.notifications})  </button>
     <button>Me ({allNotificationsCount}) </button> 
    </div>
  )
}