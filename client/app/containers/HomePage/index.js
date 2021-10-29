import React from 'react'
import { Redirect } from 'react-router-dom'

import HomeButtons from 'components/HomeButtons/Loadable'
import PrivateView from 'components/PrivateView/Loadable'

export default function HomePage() {
  const isLoggedIn = localStorage.getItem ('authToken')

  if (isLoggedIn) {
    return <PrivateView />
  } else {
    return <HomeButtons />
  }
}
