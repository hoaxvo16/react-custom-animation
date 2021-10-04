import { AnimationBehavior, divStyle } from '../../utils';
import { generate } from 'generate-password';

export function FadeIn(props: Partial<AnimationBehavior & { children: any }>) {
   const { delay, repeat, duration, children } = props;
   const animationName = generate({
      length: 10,
   });
   const styleSheet = window.document.styleSheets[0];
   const keyFrame = `@keyframes ${animationName}{
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }`;
   styleSheet.insertRule(keyFrame, styleSheet.cssRules.length);
   const style: any = {
      animationName: `${animationName}`,
      animationDuration: `${duration}s`,
      animationIterationCount: repeat === 'infinite' ? repeat : `${repeat}s`,
      animationDelay: `${delay}s`,
      ...divStyle,
   };
   return <div style={style}>{children}</div>;
}
