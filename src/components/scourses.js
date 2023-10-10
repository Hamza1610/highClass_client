
import './course.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SCourses = (props) => {
    const data = props.data;
    console.log(props);

    const secondSemesterCourses = ['Course 1', 'Course 2', 'Course 3', 'Course 4', 'Course 5', 'Course 6', 'Course 7', 'Course 8', 'Course 9', 'Course 10', 'Course 11', 'Course 12'];
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
      // Here, you would send selectedCourses to your server using an HTTP request (e.g., fetch or Axios).
      // Replace the URL with your server endpoint.
      fetch('/your-server-endpoint', {
        method: 'POST',
        body: JSON.stringify(selectedCourses),
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
                {['Course 1', 'Course 2', 'Course 3', 'Course 4', 'Course 5', 'Course 6', 'Course 7', 'Course 8', 'Course 9', 'Course 10', 'Course 11', 'Course 12'].map((course) => (
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
export default  SCourses;