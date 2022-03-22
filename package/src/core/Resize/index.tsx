import React from 'react';
import { animationCreator } from '../AnimationCreator/creator';
import { AnimationBehavior } from '../types';

export function Resize(
   props: Partial<
      AnimationBehavior & { children: any } & {
         widthRange?: [number, number];
      } & { heightRange?: [number, number] }
   >
) {
   const {
      delay = 0,
      repeat = 'infinite',
      duration = 3000,
      children,
      widthRange,
      heightRange,
   } = props;

   const animationName = animationCreator.createAnimation(
      'rotate',
      `from{ 
        width:
        ${widthRange && widthRange[0]}px;
         height:${heightRange && heightRange[0]}px;}
       to{
        width:
        ${widthRange && widthRange[1]}px;
        height:${heightRange && heightRange[1]}px;}`
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
