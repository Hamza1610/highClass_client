import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import './App.css';
import Home from "./components/home";
import SignIn from "./sign_in";
import LogIn from "./log_in";
import CourseReg from "./components/courseReg";
import Courses from "./components/courses";
import TimeReg from "./components/timeReg";

function App() {
  const firstSemesterCourses = ['MATH 101', 'MATH 103', 'MATH 105', 'PHY 131', 'PHY 111', 'PHY 161', 'Course 7', 'CHEM 101', 'CHEM 121', 'CHEM 161', 'GENS 104', 'GENS 101'];
  const secondSemesterCourses = ['Course 1', 'Course 2', 'Course 3', 'Course 4', 'Course 5', 'Course 6', 'Course 7', 'Course 8', 'Course 9', 'Course 10', 'Course 11', 'Course 12'];
  return (
    <Router>
      <div className="App">
        <Home />
        <Switch>
          <Route path="/" exact Component={Home} />
          <Route path="/api/" exact Component={CourseReg} />
          <Route path="/signin" exact Component={SignIn} />
          <Route path="/login" exact Component={LogIn} />
          <Route path="/api/study-timetable" exact Component={TimeReg}/>
          <Route path="/api/courses-first-semester" exact Component={Courses} data={{firstSemesterCourses}} />
          <Route path="/api/courses-second-semester" exact Component={Courses} data={{secondSemesterCourses}} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
