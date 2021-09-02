import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Route} from 'react-router-dom';



import Navigation from "./components/Navigation";
import CreateClient from './components/CreateClient';
import ClientsList from './components/ClientsList';



function App() {
  return (
    <Router>
      <Navigation />
      <Route path="/" component={ClientsList} />
      <Route path="/editClient/:id" component={CreateClient} />
      <Route path="/newClient" component={CreateClient} />
    </Router>
  );
}

export default App;
