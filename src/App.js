import {Switch, Route} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import Jobs from './components/Jobs'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

const App = () => (
  <Switch>
    <Route exact to="/login" component={Login} />
    <ProtectedRoute exact to="/" component={Home} />
  </Switch>
)

export default App
