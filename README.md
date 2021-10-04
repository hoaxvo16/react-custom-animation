#### React custom animation

-  Build custom animation components in React using typescript

#### Contents

-  [Usage](#usage)
-  [Start animation on action](#startonaction)
-  Supported animation:
   -  FadeIn
   -  FadeOut
   -  Rotate
   -  Resize

#### Usage <a name="usage"></a>

```jsx
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
```

### Result

![](https://media3.giphy.com/media/GEcM0crskEEbp1NTo6/giphy.gif?cid=790b7611497aaae8b381c57c6de4c49154f1f7eaf7477ee4&rid=giphy.gif&ct=g)

### Start animation on action <a name="startonaction"></a>

-  Adding **_useState_** or **_state_** (class Component) and **_start_** props

```jsx
import React from 'react';
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
               behavior={{ duration: 2, repeat: 'infinite', delay: 3 }}
            >
               <h1>FADE OUT</h1>
            </Animation>
         </div>
      </>
   );
}
```

### Result

![](https://media4.giphy.com/media/iJ87nWYvu3dlVGrZoP/giphy.gif?cid=790b7611d6d52a8abc5b9271657803100fa1c54f0bd32bb1&rid=giphy.gif&ct=g)
