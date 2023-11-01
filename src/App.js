import React from 'react';
import './App.css';
import VideoCalling from './VideoCalling/VideoCalling'
import { Route,Routes} from 'react-router-dom';
import RoomPage from './VideoCalling/RoomPage';
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element = {<VideoCalling/>}/>
      <Route path='/room/:roomID' element = {<RoomPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
