import { useState } from 'react'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { jobsAtom, messagingAtom, mynetworkAtom, notificationAtom, totalNotificationCountSelector } from './atom'


function App() {
  return <RecoilRoot>
 
    <MainApp />
  </RecoilRoot>
}

export default App


function MainApp(){
  const networkAtomCount = useRecoilValue(mynetworkAtom)
  const notificationAtomCount = useRecoilValue(notificationAtom)
  const jobsAtomCount = useRecoilValue(jobsAtom)
  const messagingAtomCount = useRecoilValue(messagingAtom)
  const totalNotificationCount = useRecoilValue(totalNotificationCountSelector)

  return (
    <div>
     <button>Home </button>
     <button>My network ({networkAtomCount > 100 ?  "99+": networkAtomCount})</button>
     <button>Jobs({jobsAtomCount > 100 ? "99+": jobsAtomCount}) </button>
     <button>Messaging({messagingAtomCount > 100 ? "99+": messagingAtomCount})  </button>
     <button>Notifications ({notificationAtomCount > 100 ? "99+" : notificationAtomCount})  </button>
     <button>Me ({totalNotificationCount}) </button> 
    </div>
  )
}