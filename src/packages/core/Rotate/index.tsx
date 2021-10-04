import { AnimationBehavior, RotateType } from '../../utils';
import { generate } from 'generate-password';

export function Rotate(props: Partial<AnimationBehavior & RotateType>) {
   const { fromDeg, toDeg, delay, repeat, duration, children } = props;
   const animationName = generate({
      length: 10,
   });
   const styleSheet = window.document.styleSheets[0];
   const keyFrame = `@keyframes ${animationName} { from {transform: rotate(${fromDeg}deg);}to {transform: rotate(${toDeg}deg); }`;
   styleSheet.insertRule(keyFrame, styleSheet.cssRules.length);
   const style: any = {
      animationName: `${animationName}`,
      animationDuration: `${duration}s`,
      animationIterationCount: repeat === 'infinite' ? repeat : `${repeat}`,
      animationDelay: `${delay}s`,
      ...children.props.style,
   };
   return <div style={style}>{children}</div>;
}
