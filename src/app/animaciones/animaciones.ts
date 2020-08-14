import { trigger,state, style, transition, animate, query, animateChild } from '@angular/animations';

export const generalAnimaciones= [
    trigger('entrada', [
        state('in', style({
          transform: 'translateX(0%) translateY(0%) ', 
          opacity: 1
      })), 
        //Enter
        transition('void => *', [
          style({
            transform: 'translateX(-100%) translateY(20%)',
            opacity: 0
          }),
          animate('1000ms linear')
        ]),
        //Leave
        transition('* => void', animate('500ms ease-out', style({
          transform: 'translateX(100%)'
        }))),
      ]),
      trigger('salida', [
        state('in', style({transform: 'translateX(30%)'})),
        //Enter
        transition('void => *', [
          style({
            transform: 'translateX(+100%)'
          }),
          animate('950ms ease-in')
        ]),
        //Leave
        transition('* => void', animate('500ms ease-out', style({
          transform: 'translateX(100%)'
        }))),
      ]),
      trigger('subida', [
        state('in', style({
          transform: ' translateY(30%) ', 
          
          opacity: 1
      })),
        //Enter
        transition('void => *', [
          style({
            transform: 'translateY(100%)'
          }),
          animate('1000ms linear')
        ]),
        //Leave
        transition('* => void', animate('500ms linear', style({
          transform: 'translateX(100%)'
        }))),
      ]),
      trigger('bajada', [
        state('in', style({
          transform: ' translateY(0%) ', 
          
          opacity: 1
      })),
        //Enter
        transition('void => *', [
          style({
            transform: 'translateY(-100%)'
          }),
          animate('1000ms linear')
        ]),
        //Leave
        transition('* => void', animate('500ms linear', style({
          transform: 'translateX(100%)'
        }))),
      ]),
      trigger('diagonal', [
        state('in', style({
          transform: 'translateX(0%) translateY(0%) ', 
          opacity: 1
      })),
        //Enter
        transition('void => *', [
          style({
            transform: 'translateX(-100%) translateY(50%)',
            opacity: 0
          }),
          animate('1000ms linear')
        ]),
        //Leave
        transition('* => void', animate('700ms ease-out', style({
          transform: 'translateX(100%)'
        }))),
      ]),
      trigger('nav', [
        state('in', style({
          opacity: 1
      })),
        //Enter
        transition('void => *', [
          style({
            opacity: 0
          }),
          
          animate('1200ms linear')
        ]),
        //Leave
        transition('* => void', animate('500ms ease-out', style({
          transform: 'translateX(100%)'
        }))), 
      ]),
  
]