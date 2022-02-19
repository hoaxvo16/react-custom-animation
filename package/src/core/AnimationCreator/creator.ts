import { generate } from 'generate-password';

class AnimationCreator {
   private map = new Map();

   createAnimation(type: string, range: string) {
      if (this.map.has(type + range)) {
         return this.map.get(type + range);
      } else {
         const animationName = this.createKeyFrame(range);
         this.map.set(type, animationName);
         return animationName;
      }
   }
   createKeyFrame(range: string) {
      const animationName = generate({
         length: 10,
      });
      const styleSheet = window.document.styleSheets[0];
      const keyFrame = `@keyframes Animation#${animationName}{${range}}`;
      styleSheet.insertRule(keyFrame, styleSheet.cssRules.length);
      return animationName;
   }
}

export const animationCreator = new AnimationCreator();
