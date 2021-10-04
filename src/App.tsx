import './App.css';
import { Animation } from './packages';

function App() {
   return (
      <div className="App">
         <div className="rotate">
            <Animation
               type="rotate"
               fromDeg={0}
               toDeg={360}
               behavior={{ duration: 3, repeat: 'infinite' }}
            >
               <button>ROTATE</button>
            </Animation>
         </div>
         <Animation
            type="fade-in"
            behavior={{ duration: 2, repeat: 'infinite' }}
         >
            <h1>FADE IN</h1>
         </Animation>
         <Animation
            type="fade-out"
            behavior={{ duration: 2, repeat: 'infinite', delay: 3 }}
         >
            <h1>FADE OUT</h1>
         </Animation>
      </div>
   );
}

export default App;
