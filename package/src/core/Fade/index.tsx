import { AnimationBehavior } from '../types';
import { animationCreator } from '../AnimationCreator/creator';
import React from 'react';

export function Fade(
   props: Partial<
      AnimationBehavior & { children: any } & { opacityRange: [number, number] }
   >
) {
   const {
      delay = 0,
      repeat = 'infinite',
      duration = 3000,
      children,
      opacityRange = [0, 1],
   } = props;

   const animationName = animationCreator.createAnimation(
      'fadeIn',
      `from{opacity: ${opacityRange[0]};}to{opacity: ${opacityRange[1]};}`
   );

   const style: any = {
      animationName: `${animationName}`,
      animationDuration: `${duration}ms`,
      animationIterationCount: repeat === 'infinite' ? repeat : `${repeat}ms`,
      animationDelay: `${delay}ms`,
      ...children.props.style,
   };
   console.log(children);

   return <div style={style}>{children}</div>;
}
