import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Course from './Components/Course'
import AllCourses from './Components/AllCourses';
import AddCourse from "./Components/AddCourse"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Card, Container } from 'reactstrap';
import Menus from "./Components/Menus";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UpdateCourses from './Components/UpdateCourses';

function App() {
  return (
    <div style={{ border: "none" }}>
      <Router>
        <ToastContainer autoClose={1200} />
        <Header />
        <Container >
          
            <div class="row">
              <div class="col-4">
                <Menus />
              </div>
              <div class="col-8">
                <Routes>
                  <Route path="/" element={<Home/>} exact />
                  <Route path="/add-course" element={<AddCourse/>} exact />
                  <Route path="/view-course" element={<AllCourses/>} exact />
                  <Route path="/update-course" element={<UpdateCourses/>} exact />
                </Routes>
              </div>
            </div>
          
        </Container>
      </Router>
    </div>
  )
}

export default App;
