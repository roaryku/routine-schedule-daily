import image from './daily-routine.png'
import imageTwo from './things.avif'
import './App.css';
import { DailyRoutine } from './DailyRoutine';

function App() {
  return (
    <div className="App">
      <div className='container'>
         <h1>Daily Routine</h1>
     </div>

     <div className='container'>
         <img className="image" src={image} width='150px' alt='mom'/>
     </div>

     <div className='container'>
        <DailyRoutine/>
     </div>

     <div className='container'>
         <img className="imageTwo" src={imageTwo} width='150px' alt='mom'/>
     </div>
    </div>
  );
}

export default App;
