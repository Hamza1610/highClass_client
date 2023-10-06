import './courseReg.css';
import { Link } from 'react-router-dom';
const CourseReg = () => {


    return (
        <div className="course-reg">
            <h1>Course Registration</h1>
            <div className="semester-selection">
                <Link><div className="semester-option">First Semester</div></Link>
                <Link><div className="semester-option">Second Semester</div></Link>
            </div>
        </div>
    )
}
export default CourseReg;