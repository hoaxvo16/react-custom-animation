import { AnimationBehavior } from '../types';
import { animationCreator } from '../AnimationCreator/creator';

export function FadeIn(
   props: Partial<
      AnimationBehavior & { children: any } & { opacityRange: [number, number] }
   >
) {
   const {
      delay = 0,
      repeat = 'infinite',
      duration = 300,
      children,
      opacityRange = [0, 1],
   } = props;

   const animationName = animationCreator.createAnimation(
      'fadeIn',
      `from{opacity: ${opacityRange[0]};}to{opacity: ${opacityRange[1]};}`
   );

   const style: any = {
      animationName: `${animationName}`,
      animationDuration: `${duration}s`,
      animationIterationCount: repeat === 'infinite' ? repeat : `${repeat}s`,
      animationDelay: `${delay}s`,
      ...children.props.style,
   };

   return <div style={style}>{children}</div>;
}
