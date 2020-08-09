import React from 'react';
import './App.css';
import Home from './Home.js';

import Header from './Header.js';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
function App(){
  return(
    <div className="App">
       <Router>
        
        <div>
          
          <Header />
          <Route path="/" component={Home}/>
          
          </div>
      </Router>
      </div>
  );

}
export default App;