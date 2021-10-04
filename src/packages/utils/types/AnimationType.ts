import { AnimationBehavior } from './AnimationBehavior';

export type AnimationType = {
   type: 'fade-in' | 'fade-out' | 'rotate';
   children: any;
   start: boolean;
   behavior?: AnimationBehavior;
};
