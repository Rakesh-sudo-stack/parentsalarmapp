import '../css/App.css';
import {Routes, Route} from 'react-router-dom';
import Menu from './Menu';
import Homework from './Homework';
import Announcement from './Announcement';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Menu />} />
        <Route exact path='/homework' element={<Homework />} />
        <Route exact path='/announcement' element={<Announcement />} />
      </Routes>
    </>
  );
}

export default App;
