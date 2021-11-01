
import "./App.css";
import { Navbar, Nav } from "react-bootstrap";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import StocksPage from "./components/StocksPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home"><img src="data:image/jpeg;base64,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" style={{height:"50px"}}/> </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">
                <Link to="/">Stocks-Page</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Route exact path="/">
          <StocksPage />
        </Route>
      </Router>
    </div>
  );
}

export default App;
