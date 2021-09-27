import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
import AllBooks from './components/AllBooks';
import EditBook from './components/EditBook';
import AllBookOwnerships from './components/AllBookOwnerships';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/allBooks" component={AllBooks} />
          <Route exact path="/editBook/:id" component={EditBook} />
          <Route exact path="/allBookOwnerships" component={AllBookOwnerships} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
