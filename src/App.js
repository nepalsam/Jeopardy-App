import Welcome from './components/welcome/Welcome.js';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Clock from './components/clock/Clock.js';
import Contact from './components/contact/Contact.js';
import Navigation from './components/navigation/Navigation.js';
import Jeopardy from './components/jeopardy/Jeopardy.js';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route
          exact path="/"
          render={(props) => <Welcome {...props} name="SamNepal" />}
        />
        <Route
          path="/welcome/:name"
          render={(props) => <Welcome {...props} name={props.match.params.name} />}
        />
        <Route path="/clock" component={Clock} />
        <Route path="/contact" component={Contact} />
        <Route path="/jeopardy" component={Jeopardy} />
        <Route render={(props) => <h1>404 Page not found</h1>} />
      </Switch>
    </div>
  );
}

export default App;