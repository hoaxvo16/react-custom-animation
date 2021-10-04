import React from 'react';
import './App.css';
import { Animation } from './packages';

function App() {
   const [start, setStart] = React.useState(false);
   const [rotate, setRotate] = React.useState(false);
   return (
      <>
         <button onClick={() => setStart(!start)}>
            {start ? 'Stop fade in, fade out' : 'Start fade in, fade out'}
         </button>

         <div className="App">
            <div className="rotate">
               <Animation
                  start={rotate}
                  type="rotate"
                  fromDeg={0}
                  toDeg={360}
                  behavior={{ duration: 3, repeat: 'infinite' }}
               >
                  <button onClick={() => setRotate(!rotate)}>
                     {rotate ? 'Stop rotate' : 'Start rotate'}
                  </button>
               </Animation>
            </div>
            <Animation
               start={start}
               type="fade-in"
               behavior={{ duration: 2, repeat: 'infinite' }}
            >
               <h1>FADE IN</h1>
            </Animation>
            <Animation
               start={start}
               type="fade-out"
               behavior={{ duration: 2, repeat: 'infinite' }}
            >
               <h1>FADE OUT</h1>
            </Animation>

            <Animation
               type="resize"
               fromWidth={100}
               toWidth={200}
               fromHeight={100}
               toHeight={200}
               behavior={{ duration: 3, repeat: 'infinite' }}
            >
               <div style={{ backgroundColor: 'red' }}>Resize</div>
            </Animation>
         </div>
      </>
   );
}

export default App;
