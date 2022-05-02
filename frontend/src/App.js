import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Homepage from './Pages/Homepage/Homepage'
import Login from './Pages/login/SignIn'
import Signup from './Pages/signup/SignUp'
import CreateEvent from './Pages/CreateEventPage/CreateEvent';
import Event from './Pages/Eventprofile/EventPage'

function App() {
  return (
    <>
    <Router>
      <Routes>

      <Route path='/' element={<Homepage/>} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/newevent' element={<CreateEvent />} />
      <Route path='/event' element={<Event />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
