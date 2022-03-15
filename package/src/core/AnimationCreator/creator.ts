import { randomInteger } from '../utils/random';

class AnimationCreator {
   private map = new Map();
   private classNameLen = 10;

   createAnimation(type: string, range: string) {
      if (this.map.has(type + range)) {
         return this.map.get(type + range);
      } else {
         const animationName = this.createKeyFrame(range);
         this.map.set(type + range, animationName);
         return animationName;
      }
   }
   createKeyFrame(range: string) {
      const animationName = this.generateClassName();
      const styleSheet = window.document.styleSheets[0];
      const keyFrame = `@keyframes ${animationName}{${range}}`;
      styleSheet.insertRule(keyFrame, styleSheet.cssRules.length);
      return animationName;
   }
   generateClassName = () => {
      let className = '';
      for (let i = 0; i < this.classNameLen; i++) {
         const firstChar = randomInteger(65, 90);
         const secondChar = randomInteger(97, 122);
         className +=
            String.fromCharCode(firstChar) + String.fromCharCode(secondChar);
      }
      return className;
   };
}

export const animationCreator = new AnimationCreator();
