import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Signup from './components/Signup';
import Login from './components/Login';
import { useState } from 'react';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard';

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 2000);
}
  return (
    <>
    <NoteState>
    <Router forceRefresh={true}>
    <Navbar />
    <Alert alert={alert}/>
    <div className="containers">
    <Switch>
          <Route exact path="/">
              <Dashboard />
          </Route>
          <Route exact path="/home">
              <Home showAlert={showAlert} />
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>
          <Route exact path="/login">
            <Login showAlert={showAlert} />
          </Route>
          <Route exact path="/signup">
            <Signup showAlert={showAlert} />
          </Route>
        </Switch>
    </div>
    </Router>
    </NoteState>
    </>
    
  );
}

export default App;
