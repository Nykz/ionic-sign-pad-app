import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad';

@Component({
  selector: 'app-sign-pad',
  templateUrl: './sign-pad.component.html',
  styleUrls: ['./sign-pad.component.scss'],
})
export class SignPadComponent implements OnInit {

  @ViewChild(SignaturePad) signaturePad: SignaturePad;
  signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
    'minWidth': 5,
    // 'canvasWidth': 500,
    // 'canvasHeight': 300
  };
  @Output() signImage: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  ngAfterViewInit() {
    this.drawClear();
    this.canvasResize();
  }

  canvasResize() {
    let canvas = document.querySelector('canvas');
    console.log(window.innerHeight);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - (0.19 * window.innerHeight);
  }

  drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
    const sign = this.signaturePad.toDataURL();
    console.log(sign);
    this.signImage.emit(sign);
  }

  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }

  drawClear() {
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
  }

}
