import { Rotate } from './Rotate';
import { AnimationType, ResizeType, RotateType } from '../utils';
import { FadeIn } from './FadeIn';
import { FadeOut } from './FadeOut';
import { Resize } from './Resize';

type PropType = Partial<AnimationType & RotateType & ResizeType>;

const UNDEFINED: any = {};

const BEHAVIOR: any = {
   repeatTime: 1,
   delayTime: 0,
   durationTime: 0,
   isStart: true,
};

export function Animation(props: PropType): JSX.Element {
   const {
      type,
      fromDeg,
      toDeg,
      children,
      start,
      fromWidth,
      fromHeight,
      toWidth,
      toHeight,
   } = props;
   const { repeat, delay, duration } = props.behavior
      ? props.behavior
      : UNDEFINED;

   let { repeatTime, delayTime, durationTime, isStart } = BEHAVIOR;

   if (repeat) repeatTime = repeat;

   if (delay) delayTime = delay;

   if (duration) durationTime = duration;

   if (start !== undefined) isStart = start;

   if (isStart)
      switch (type) {
         case 'rotate': {
            let fromDegree = 0;
            let toDegree = 0;
            if (fromDeg) {
               fromDegree = fromDeg;
            }
            if (toDeg) {
               toDegree = toDeg;
            }
            return (
               <Rotate
                  fromDeg={fromDegree}
                  duration={durationTime}
                  toDeg={toDegree}
                  delay={delayTime}
                  repeat={repeatTime}
               >
                  {children}
               </Rotate>
            );
         }
         case 'fade-in':
            return (
               <FadeIn
                  duration={durationTime}
                  delay={delayTime}
                  repeat={repeatTime}
               >
                  {children}
               </FadeIn>
            );
         case 'fade-out':
            return (
               <FadeOut
                  duration={durationTime}
                  delay={delayTime}
                  repeat={repeatTime}
               >
                  {children}
               </FadeOut>
            );
         case 'resize':
            return (
               <Resize
                  fromWidth={fromWidth}
                  fromHeight={fromHeight}
                  toWidth={toWidth}
                  toHeight={toHeight}
                  duration={durationTime}
                  delay={delayTime}
                  repeat={repeatTime}
               >
                  {children}
               </Resize>
            );
         default:
            return <>{children}</>;
      }
   else return <>{children}</>;
}
