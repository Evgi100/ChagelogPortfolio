import { Component, Input } from '@angular/core'
import { Projects } from '../../model'

@Component({
    selector: 'portfolio-projects',
    templateUrl: '/projects.component.html'
})


export class PortfolioProjectsComponent {
    @Input() public project: Projects
}
