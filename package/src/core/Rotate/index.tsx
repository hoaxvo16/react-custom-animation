import React from 'react';
import { animationCreator } from '../AnimationCreator/creator';
import { AnimationBehavior } from '../types';

export function Rotate(
   props: Partial<
      AnimationBehavior & { children: any } & { degRange: [number, number] }
   >
) {
   const {
      delay = 0,
      repeat = 'infinite',
      duration = 3000,
      children,
      degRange = [0, 180],
   } = props;

   const animationName = animationCreator.createAnimation(
      'rotate',
      `from{transform: rotate(${degRange[0]}deg);}to{transform: rotate(${degRange[1]}deg);}`
   );

   const style: any = {
      animationName: `${animationName}`,
      animationDuration: `${duration}ms`,
      animationIterationCount: repeat === 'infinite' ? repeat : `${repeat}ms`,
      animationDelay: `${delay}ms`,
      ...children.props.style,
   };

   return <div style={style}>{children}</div>;
}
