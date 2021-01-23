import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Logon from './pages/Logon'
import Register from './pages/Register'
import Profile from './pages/Profile'
import NewIncident from './pages/NewIncident'


export default function Routes() {
  return(
    // O BrowserRouter precisa esta envolta para que funcione.
    <BrowserRouter>
      {/* O Switch permite que use apenas uma rota ou tambem nunca ira requisitar mais de uma rota. */}
      {/* O Comando exact e usado para pegar o caminho atual da rota ou seja o caminho exato */}
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path='/register' component={Register} />

        <Route path='/profile' component={Profile} />
        <Route path='/incidents/new' component={NewIncident} />
      </Switch>
    </BrowserRouter>
  )
}