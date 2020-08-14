import { trigger,state, style, transition, animate } from '@angular/animations';

export const cabecerAnimacion= [
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
          animate('550ms ease-in')
        ]),
        //Leave
        transition('* => void', animate('500ms ease-out', style({
          transform: 'translateX(100%)'
        }))),
      ]),
      trigger('cabecera', [
        state('in', style({transform: 'translateX(30%)'})),
        //Enter
        transition('void => *', [
          style({
            transform: 'translateY(+100%)'
          }),
          animate('500ms linear')
        ]),
        //Leave
        transition('* => void', animate('500ms linear', style({
          transform: 'translateX(100%)'
        }))),
      ])
  
]