import { Component, Input, style, state, animate, transition, trigger } from '@angular/core';
import { Changelog } from '../../model'

@Component({
  selector: 'app-changelog',
  templateUrl: './changelog.component.html',
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
export class ChangelogComponent {

  @Input() public change: Changelog
  public showChanges: boolean = true;

  public toggleChanges(): void {
    this.showChanges = !this.showChanges
  }

}
