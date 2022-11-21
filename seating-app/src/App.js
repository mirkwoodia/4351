import 'bootstrap/dist/css/bootstrap.min.css'; // This is required for bootstrap components to function correctly!
import {
  Route,
  Routes
} from 'react-router-dom'
import ShellPage from './Components/ShellPage'
import Home from './Components/Home'
import Reserve from './Components/Reserve'
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ShellPage />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home/>} />
          <Route path="reserve" element={<Reserve/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
