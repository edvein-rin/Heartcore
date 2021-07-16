import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components/macro'

import Home from '../pages/Home'
import About from '../pages/About'
import Thesis from '../pages/Thesis'
import Companies from'../pages/Companies'
import Team from '../pages/Team'
import Values from '../pages/Values'
import Insights from '../pages/Insights'

import Footer from './Footer'
import Header from './Header'


function App() {
  return (
    <Wrapper>
      <Header />
      <main>
        <Switch>
          <Route path='/' exact><Home /></Route>
          <Route path='/about'><About /></Route>
          <Route path='/thesis'><Thesis /></Route>
          <Route path='/companies'><Companies /></Route>
          <Route path='/team'><Team /></Route>
          <Route path='/values'><Values /></Route>
          <Route path='/insights'><Insights /></Route>
        </Switch>
      </main>
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  & > * {
    width: 100%;
  }
`

export default App
