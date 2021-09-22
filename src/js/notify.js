import { alert, error, info,notice, defaultModules, success, defaults} from '../../node_modules/@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/Angeler.css';
import '@pnotify/core/Material.css';
import '@pnotify/animate/dist/PNotifyAnimate'
// import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
// import {notice, defaultModules} from '@pnotify/core';
import * as PNotifyMobile from '@pnotify/mobile';


defaults.styling = 'angeler';
defaults.icons = 'angeler';
defaults.delay = 800;
defaults.sticker = false;
defaults.animateSpeed= 'slow'
defaults.shadow= false;

const myNotice = notice({
  text: "I'm a notice.",
  modules: new Map([
    ...defaultModules,
    [PNotifyMobile, {
      swipeDismiss: true,
      // closerHover: false,
      closer: false
    }]
  ])
});



export function notifyAlert (txt) {
      alert({
          text: txt,
        });
  }
export function notifyError(txt) {
      error({
          text: txt,
          delay: 4000,
        });
  };
export function notifyInfo (txt) {
      info({
           text: txt,
        });
  }
export function notifySuccess (txt) {
      success({
         text: txt,
         delay: 1200,
      });
}
