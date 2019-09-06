import {
  Directive,
  ElementRef,
  Input,
  KeyValueDiffers,
  OnInit,
  Renderer2
} from '@angular/core';
import { DomController } from '@ionic/angular';

//Directive for a fab that hides it based on whether or not ion-content is scrolling up or not scrolling at all.
//Properties are [appHideFab], fabClass.

@Directive({
  selector: '[appHideFab]'
})
export class HideFabDirective implements OnInit {
  @Input('appHideFab') scrollArea;
  @Input() fabClass;

  private differ: any;
  private fabToHide;
  private isScrolling: boolean = false;
  private scrollingDown: boolean = false;
  private scrollingUp: boolean = false;
  private hidden: boolean = false;
  private triggerDistance: number = 0;
  private oldScrollTop: number = 0;

  constructor(
    private renderer: Renderer2,
    private element: ElementRef,
    private domCtrl: DomController,
    private differs: KeyValueDiffers
  ) {
    this.differ = this.differs.find({}).create();
  }

  ngOnInit() {
    this.fabToHide = this.element.nativeElement.getElementsByClassName(
      this.fabClass
    )[0];

    //Changes scrolling variables when scrolling stops
    this.scrollArea.ionScrollEnd.subscribe(scrollEnd => {
      let isScrolling = scrollEnd.detail.isScrolling;
      if (isScrolling === false) {
        this.scrollingDown = false;
        this.scrollingUp = false;
        this.isScrolling = false;
      } else {
        console.log('Error in isScrolling');
      }
    });

    this.scrollArea.ionScroll.subscribe(scrollEvent => {
      let deltaY = scrollEvent.detail.deltaY;
      //Changes scrolling variables when scrolling down
      if (deltaY > this.triggerDistance) {
        this.scrollingDown = true;
        this.scrollingUp = false;
        this.isScrolling = true;
        //Changes scrolling variables when scrolling up
      } else if (deltaY <= 0) {
        this.scrollingDown = false;
        this.scrollingUp = true;
        this.isScrolling = true;
      } else {
        console.log('other');
      }
    });
  }

  ngDoCheck() {
    //If the content is being scrolling down and the fab is not hidden, hide the fab.
    //fadeOut animation is in global.scss
    if (
      this.scrollingDown &&
      this.isScrolling &&
      !this.scrollingUp &&
      !this.hidden
    ) {
      this.hidden = true;
      this.domCtrl.write(() => {
        this.renderer.setStyle(
          this.fabToHide,
          'webkitAnimation',
          'fadeOut 100ms'
        );
        this.renderer.setStyle(
          this.fabToHide,
          'webkitAnimationFillMode',
          'forwards'
        );
      });
    }
    //If the content is not being scrolled or is scrolling up and the fab is hidden, hide the fab.
    //bounceIn animation is in global.scss
    else if (
      (!this.isScrolling || this.scrollingUp) &&
      !this.scrollingDown &&
      this.hidden
    ) {
      this.hidden = false;
      setTimeout(() => {
        this.domCtrl.write(() => {
          this.renderer.setStyle(
            this.fabToHide,
            'webkitAnimation',
            'bounceIn 350ms'
          );
          this.renderer.setStyle(
            this.fabToHide,
            'webkitAnimationFillMode',
            'forwards'
          );
        });
      }, 1000);
    }
  }
}
