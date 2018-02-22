import { Component, OnInit, style, state, animate, transition, trigger } from '@angular/core';
import { Portfolio, PortfolioData } from '../model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(":enter", [
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 }))
      ]),
      transition(":leave", [
        animate(500, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class AppComponent implements OnInit {

  public portfolio: Portfolio;
  public logOpen: boolean = true;
  public updatesOpen: boolean = true;
  public bioOpen: boolean = true;



  public ngOnInit(): void {
    this.portfolio = PortfolioData
  }

  public toggleOpen(event): void {
    switch (event) {
      case 'expandLog':
        this.logOpen = !this.logOpen
        break;
      case 'expandUpdates':
        this.updatesOpen = !this.updatesOpen
        break;
      case 'expandBio':
        this.bioOpen = !this.bioOpen
        break;
    }
  }
}

// When the function is not returning anything then 
// void is what we use to let typescript check it for us