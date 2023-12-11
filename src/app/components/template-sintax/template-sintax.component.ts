import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import TextPlugin from 'gsap/TextPlugin';

@Component({
  selector: 'app-template-sintax',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  host: { class: 'layout' },
  templateUrl: './template-sintax.component.html',
  styleUrl: './template-sintax.component.scss'
})
export class TemplateSintaxComponent implements OnInit {

  oldSrc = '../../../assets/images/old-if.png';
  newSrc = '../../../assets/images/new-if.png';

  imgType = false;


  ngAfterViewInit() {
    this.loadLine();
  }

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger, TextPlugin);
  }

  loadLine() {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.line',
        start: 'top 10%',
        end: 'bottom -10%',
        scrub: true,
        pin:'.header',
        markers: true,
      }
    });

    tl
      .to('.line', {
        width: '20%',
      })
      .to('.content', {
        opacity:1
      }, '+=0.5')

  }

  loadOld() {
    const tl = gsap.timeline({});


    // .to('.description-p', {
    //   text: {
    //     value: 'A sintaxe do Angular é muito parecida com a do Vue.js, porém, o Angular é um framework mais robusto e com mais recursos.',
    //     speed: 0.9,
    //   }
    // })
  }

  loadNew() {
    gsap.to('.example-img', {
      rotateY: 360,
      duration: 1,
      onStart:() => {
        this.imgType = true;

      },
    })

  }
}
