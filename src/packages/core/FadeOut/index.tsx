import { AnimationBehavior } from '../../utils';
import { generate } from 'generate-password';

export function FadeOut(props: Partial<AnimationBehavior & { children: any }>) {
   const { delay, repeat, duration, children } = props;
   const animationName = generate({
      length: 10,
   });
   const styleSheet = window.document.styleSheets[0];
   const keyFrame = `@keyframes ${animationName}{
        from{
            opacity: 1;
        }
        to{
            opacity: 0;
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
