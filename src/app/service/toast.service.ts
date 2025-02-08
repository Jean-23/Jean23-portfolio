import { Injectable } from '@angular/core';
import Toastify from 'toastify-js';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor() { }

  showToast(message: string, type: 'success' | 'error' = 'success') {
    const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';

    Toastify({
      text: message,
      duration: 2000,
      close: true,
      gravity: 'top',
      position: 'right',
      className: `text-white px-4 py-2 rounded-md shadow-md ${bgColor}`,
      escapeMarkup: false,
    }).showToast();
  }
}
