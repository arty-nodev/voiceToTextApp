import { Component } from '@angular/core';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-home-vtt',
  standalone: true,
  imports: [LottieComponent],
  templateUrl: './home-vtt.component.html',
  styleUrl: './home-vtt.component.scss',
})
export class HomeVttComponent {
  public options: AnimationOptions = {
    path: '../../../assets/lotties/anim-pulse.json',
    
  };
}
