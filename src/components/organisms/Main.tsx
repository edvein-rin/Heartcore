import styled from 'styled-components/macro'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'
import Thesis from '../pages/Thesis'
import Companies from'../pages/Companies'
import Team from '../pages/Team'
import Values from '../pages/Values'
import Insights from '../pages/Insights'


export default function Main () {
  return (
    <Wrapper>
      <Switch>
        <Route path='/' exact><Home /></Route>
        <Route path='/about'><About /></Route>
        <Route path='/thesis'><Thesis /></Route>
        <Route path='/companies'><Companies /></Route>
        <Route path='/team'><Team /></Route>
        <Route path='/values'><Values /></Route>
        <Route path='/insights'><Insights /></Route>
      </Switch>
    </Wrapper> 
  )
}

export const Wrapper = styled.main``
