import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

export const TOAST_STATE = {
  success:  {name:'success-toast',
            icon: 'fa-regular fa-circle-check'},
  warning:  {name: 'warning-toast',
            icon: 'fa-solid fa-exclamation'},
  danger:   {name:'danger-toast',
            icon: 'fa-regular fa-circle-xmark'},
  info:     {name: 'info-toast',
            icon: 'fa-regular fa-circle-question'}
};

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  public showsToast$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public toastMessage$: BehaviorSubject<string> = new BehaviorSubject<string>('Default toast message');
  public toastState$: BehaviorSubject<string> = new BehaviorSubject<string>(TOAST_STATE.success.name);
  public toastIcon$: BehaviorSubject<string> = new BehaviorSubject<string>(TOAST_STATE.success.icon);
  constructor() { }

  showToast(toastState: string, toastMessage: string, toastIcon: string): void {
    this.toastState$.next(toastState);
    this.toastIcon$.next(toastIcon);
    this.toastMessage$.next(toastMessage);
    this.showsToast$.next(true);
  }

  dismissToast(): void {
    this.showsToast$.next(false);
  }
}
