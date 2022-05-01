import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Homepage from './Pages/Homepage/Homepage'
import Event from './Pages/Eventpage/EventPage'
import CreateEvent from './Pages/CreateEvent/CreateEvent'
import SignIn from './Components/Authentication/SignIn';
import SignUp from './Components/Authentication/SignUp';

function App() {
  return (
    <>
    <Router>
      <Routes>

      
      <Route path='/' element={<Homepage/>} />
      
      <Route path='/event' element={<Event/>} />

      <Route path='/newevent' element={<CreateEvent/>} />

      <Route path='/signin' element={<SignIn/>} />

      <Route path='/signup' element={<SignUp/>} />

      </Routes>
    </Router>
    </>
  );
}

export default App;
