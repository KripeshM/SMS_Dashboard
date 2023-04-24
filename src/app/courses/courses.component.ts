import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  @Input() bg:string='';
  @Input() icon:string='';
  @Input() branch:string='';
  @Input() hod:string='';
  @Input() totalstaff:string='';
  @Input() totalstudents:string='';
}
