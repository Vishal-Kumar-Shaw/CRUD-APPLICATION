

import React from "react";
import NavBar from './Components/Navbar';
import CodeForInterview from './Components/codeforinterview';
import AddUser from './Components/AddUser';
import AllUsers from './Components/AllUsers';
import NotFound from "./Components/NotFound";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
       <NavBar/>
       <Routes>
            <Route exact path="/" element={ <CodeForInterview/>}/>
            <Route exact path="/add" element={ <AddUser/>}/>
            <Route exact path="/all" element={ <AllUsers/>}/>
            <Route component={NotFound} />
       </Routes>
    </Router>
  );
}

export default App;
