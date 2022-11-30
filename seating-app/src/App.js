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
import React, { useState, useEffect } from 'react';

function App() {
  const [userToken, setUserToken] = useState({userId: 'not_registered', loggedIn: false})
  const [data, getData] = useState({})
  const token = {
    setToken: setUserToken,
    userToken: userToken
  }

  useEffect(() => {
    const url = "/express_backend";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        getData(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ShellPage token={token}/>}>
          <Route index element={<Home />} />
          <Route exact path="home" element={<Home/>} />
          <Route exact path="reserve" element={<Reserve/>} />
          <Route path="404" element={<ErrorPage />} />
          <Route path="*" element={<Navigate to="404" />} />
        </Route>
      </Routes>
      {userToken.userId}
      <p>{data.express}</p>
    </div>
  );
}

export default App;