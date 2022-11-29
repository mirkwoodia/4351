import 'bootstrap/dist/css/bootstrap.min.css'; // This is required for bootstrap components to function correctly!
import {
  Navigate,
  Route,
  Routes,
} from 'react-router-dom'
import ShellPage from './Components/ShellPage'
import Home from './Components/Home'
import Reserve from './Components/Reserve'
import ErrorPage from './Components/ErrorPage'
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  state = {
      data: null
    };
  
    componentDidMount() {
      this.callBackendAPI()
        .then(res => this.setState({ data: res.express }))
        .catch(err => console.log(err));
    }
      // fetching the GET route from the Express server which matches the GET route from server.js
    callBackendAPI = async () => {
      const response = await fetch('/express_backend');
      const body = await response.json();
  
      if (response.status !== 200) {
        console.log(response.status)
        throw Error(body.message) 
      }
      return body;
    };
  
    render() {
      return (
        <div className="App">
          <Routes>
            <Route path="/" element={<ShellPage/>}>
              <Route index element={<Home />} />
              <Route exact path="home" element={<Home/>} />
              <Route exact path="reserve" element={<Reserve/>} />
              <Route path="404" element={<ErrorPage />} />
              <Route path="*" element={<Navigate to="404" />} />
            </Route>
          </Routes>
          <p className="App-intro">{this.state.data}</p>
        </div>
      );
    }
  }

export default App;