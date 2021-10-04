import { Rotate } from './Rotate';
import { AnimationType, RotateType } from '../utils';
import { FadeIn } from './FadeIn';
import { FadeOut } from './FadeOut';

type PropType = Partial<AnimationType & RotateType>;
const UNDEFINED: any = {};

export function Animation(props: PropType): JSX.Element {
   const { type, fromDeg, toDeg, children } = props;
   const { repeat, delay, duration } = props.behavior
      ? props.behavior
      : UNDEFINED;

   let repeatTime: any = 'none',
      delayTime = 0,
      durationTime = 0;

   if (repeat) {
      repeatTime = repeat;
   }
   if (delay) {
      delayTime = delay;
   }

   if (duration) {
      durationTime = duration;
   }
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
      default:
         return <div></div>;
   }
}
