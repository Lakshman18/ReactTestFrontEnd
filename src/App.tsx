import React, { useState } from 'react';
import NavBar from './Pages/NavBar'
import ClassRoom from './Pages/ClassRoom'
import Subject from './Pages/Subject'
import Teacher from './Pages/Teacher'
import Student from './Pages/Student'
import AllocateClassRoom from './Pages/AllocateClassRoom'
import AllocateSubject from './Pages/AllocateSubject'
import { BrowserRouter as Router, Routes, Route , redirect} from 'react-router-dom';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div> 
        <Router>
          <NavBar />
          <Routes>
            <Route path='/'  element={< Student />} />
            <Route path='/teachers' element={< Teacher />} />
            <Route path='/subject' element={< Subject />} />
            <Route path='/classRoom' element={< ClassRoom />} />
            <Route path='/allocateClassRoom' element={< AllocateClassRoom />} />
            <Route path='/allocateSubject' element={< AllocateSubject />} />
          </Routes>
        </Router>
    </div>
    );
}

export default App;
