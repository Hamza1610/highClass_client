
import './course.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const FCourses = (props) => {

    // Initialize state to store selected courses
    const [selectedCourses, setSelectedCourses] = useState([]);

    // Function to handle course selection
    const handleCourseSelection = (course) => {
      if (selectedCourses.includes(course)) {
        // If course is already selected, deselect it
        setSelectedCourses(selectedCourses.filter((c) => c !== course));
      } else {
        // If course is not selected, select it
        setSelectedCourses([...selectedCourses, course]);
      }
    };
  
    // Function to submit selected courses to the server
    const handleSubmit = () => {
      // short some times don't work the we want
      // const courses = {}
      // let count = 1
      // selectedCourses.map((item) => {
      //   ++count
      //   courses[count] = item
      //   return courses;
      // })
      // long code sometimes are better then short
      const data = { RegNum: 'Your reg Number', Courses: selectedCourses}
      console.log(data);
      fetch('/course-reg', {
        method: 'POST',
        body: JSON.stringify(data),
        // Important to actually add this if data is a json type
        headers: {
          'Content-Type': 'application/json',
        },

      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Response from server:', data);
          alert('Courses registered')
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    };
    return (
        <div className="courses-div">
            <h1>Register your courses</h1>
            <table>
            <thead>
                <tr>
                <th>Course</th>
                <th>Select</th>
                </tr>
            </thead>
            <tbody>
                {['MATH 101', 'MATH 103', 'MATH 105', 'PHY 131', 'PHY 111', 'PHY 161', 'Course 7', 'CHEM 101', 'CHEM 121', 'CHEM 161', 'GENS 104', 'GENS 101'].map((course) => (
                <tr key={course}>
                    <td>{course}</td>
                    <td>
                    <input
                        type="checkbox"
                        name="selectedCourse"
                        value={course}
                        checked={selectedCourses.includes(course)}
                        onChange={() => handleCourseSelection(course)}
                    />
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
            <Link to='/api/study-timetable'><button onClick={handleSubmit}>Submit</button></Link>
        </div>    
    )

}
export default  FCourses;