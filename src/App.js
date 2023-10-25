import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import './App.css';
import Home from "./components/home";
import SignIn from "./sign_in";
import LogIn from "./log_in";
import CourseReg from "./components/courseReg";
import LearnGroup from "./components/learnGroup";
import FCourses from "./components/fcourses";
import SCourses from "./components/scourses";
import TimeReg from "./components/timeReg";
import Quiz from "./components/quiz";
import ExamBoard from "./components/examBoard";

function App() {
  
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact Component={Home} />
          <Route path="/api/" exact Component={CourseReg} />
          <Route path="/signin" exact Component={SignIn} />
          <Route path="/login" exact Component={LogIn} />
          <Route path="/api/study-timetable" exact Component={TimeReg}/>
          <Route path="/api/learning-grouping" exact Component={LearnGroup}/>
          <Route path="/api/quiz&reward" exact Component={Quiz}/>
          <Route path="/exam-board" exact Component={ExamBoard}/>
          <Route path="/api/courses-first-semester" exact Component={FCourses} />
          <Route path="/api/courses-second-semester" exact Component={SCourses} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
