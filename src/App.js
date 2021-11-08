import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React from "react";
import
{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App ()
{
  const [ mode, setMode ] = useState( 'light' );
  const [ alert, setAlert ] = useState( null );

  const showAlert = ( message, type ) =>
  {
    setAlert( {
      msg: message,
      type: type
    } );
    setTimeout( () =>
    {
      setAlert( null );
    }, 1500 );
  };

  const toggleMode = () =>
  {
    if ( mode === 'light' )
    {
      setMode( 'dark' );
      document.body.style.background = 'grey';
      showAlert( 'Dark Mode has been enabled', 'success' );
    }
    else
    {
      setMode( 'light' );
      document.body.style.background = 'white';
      showAlert( 'Light Mode has been enabled', 'success' );
    }
  };

  return (
    <>
      <Alert alert={ alert } />
      <Router>
        <Navbar title="TextUtils" mode={ mode } toggleMode={ toggleMode } />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <TextForm showAlert={ showAlert } heading="Enter the Text to analyze" mode={ mode } />
            </Route>
          </Switch>

          {/* <About /> */ }
        </div>
      </Router>
    </>
  );
}

export default App;
