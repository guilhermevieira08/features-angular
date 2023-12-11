import { Component, ElementRef, ViewChild } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [

  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  @ViewChild('title') title!: ElementRef;
  @ViewChild('subtitleb') subtitle!: ElementRef;

  ngAfterViewInit() {
    this.loadHeader();

    console.log(this.title.nativeElement);
    console.log(this.subtitle.nativeElement);

  }

  loadHeader() {
    const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });

    tl
    .from('.image-logo', {
      scale: 0,
      opacity: 0,
      rotate: 720,
      duration: 1,
    })
    .from(this.title.nativeElement, {
      opacity: 0,
      x: -800,
      duration: 1,
    }, '-=0.1')
    .from(this.subtitle.nativeElement, {
      opacity: 0,
      x: -800,
    }, '-=0.3')

  }
}
