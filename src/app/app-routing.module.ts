import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { CoursesComponent } from './courses/courses.component';
import { AdmissionsComponent } from './admissions/admissions.component';
import { PlacementsComponent } from './placements/placements.component';
import { StudentDataComponent } from './student-data/student-data.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddStaffComponent } from './add-staff/add-staff.component';

const routes: Routes = [
  {
    path:'',component:MainContentComponent
  },
 
  {
    path:'student-data',component:StudentDataComponent
  },
  {
    path:'admissions',component:AdmissionsComponent
  },
  {
    path:'placements',component:PlacementsComponent
  },
  {
    path:'add-student',component:AddStudentComponent
  },
  {
    path:'add-staff',component:AddStaffComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
