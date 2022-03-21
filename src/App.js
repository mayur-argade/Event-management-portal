
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Homepage from './Pages/Homepage/Homepage'
import Event from './Pages/AddEvent/AddEvent'
import CreateEvent from './Pages/CreateEvent/CreateEvent'

function App() {
  return (
    <>
    <Router>
      <Routes>

      
      <Route path='/' element={<Homepage/>} />
      
      <Route path='/event' element={<Event/>} />

      <Route path='/newevent' element={<CreateEvent/>} />

      </Routes>
    </Router>
    </>
  );
}

export default App;
