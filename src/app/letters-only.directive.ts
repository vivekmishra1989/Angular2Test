
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[OnlyLetters]'
})
export class LettersOnlyDirective {

  constructor(private el: ElementRef) { }

  @Input() OnlyLetters: boolean;

  @HostListener('keydown', ['$event']) onKeyDown(event) {
    let e = <KeyboardEvent> event;
    if (this.OnlyLetters) {
        if (!(e.keyCode >= 97 && e.keyCode <= 122 || e.keyCode >= 65 && e.keyCode <= 90)) {
	        e.preventDefault();
	    }
    }
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/