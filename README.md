#### React custom animation

-  Build custom animation components in React using typescript

#### Usage

```jsx
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
