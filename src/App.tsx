import { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DetailCard from './components/DetailCard';
import Navbar from './components/Navbar'
import PrivateRoute from "./components/PrivateRoute";


class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path='/' element={<Navbar />} />
          <Route path="/" element={<PrivateRoute />}>
          <Route path='/detail/:id' element={<DetailCard />} />
          </Route>
        </Routes>
      </Router>
    );
  }
}

export default App;
