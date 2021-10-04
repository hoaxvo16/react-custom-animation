import { AnimationBehavior, ResizeType } from '../../utils';
import { generate } from 'generate-password';

export function Resize(props: Partial<AnimationBehavior & ResizeType>) {
   const {
      delay,
      repeat,
      duration,
      children,
      fromWidth,
      toWidth,
      fromHeight,
      toHeight,
   } = props;
   const animationName = generate({
      length: 10,
   });

   const styleSheet = window.document.styleSheets[0];
   const keyFrame = `@keyframes ${animationName}{
        from {
            width: ${fromWidth}px;
            height: ${fromHeight}px;
        }
        to {
            width: ${toWidth}px;
            height: ${toHeight}px;
        }
    }`;
   styleSheet.insertRule(keyFrame, styleSheet.cssRules.length);
   const style: any = {
      animationName: `${animationName}`,
      animationDuration: `${duration}s`,
      animationIterationCount: repeat === 'infinite' ? repeat : `${repeat}s`,
      animationDelay: `${delay}s`,
      ...children.props.style,
   };

   return <div style={style}>{children}</div>;
}
