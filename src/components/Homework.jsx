import '../css/homework.css';
import { Link } from 'react-router-dom';
import Homecard from './Homecard';

const Homework = () => {
    return(
        <div className='main-div'>
            <header><Link to="/"><i class="fa-solid fa-arrow-left-long"></i></Link></header>
            <div className="homework-area">
                <Homecard work="Draw a diagram to show nitrogen cycle. " date="02/07/2022" time="8:46 PM" />
            </div>
        </div>
    );
}

export default Homework;