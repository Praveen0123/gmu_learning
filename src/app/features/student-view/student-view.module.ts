// MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';
import { StudentViewRoutingModule } from './student-view-routing.module';



// COMPONENTS
import { StudentViewComponent } from './containers/student-view/student-view.component';
import { StudentViewSkillsComponent } from './containers/student-view-skills/student-view-skills.component';
import { StudentViewSkillsRoadmapComponent } from './containers/student-view-skills-roadmap/student-view-skills-roadmap.component';
import { StudentViewSkillsProfileComponent } from './containers/student-view-skills-profile/student-view-skills-profile.component';
import { StudentViewSkillsTranscriptComponent } from './containers/student-view-skills-transcript/student-view-skills-transcript.component';
import { StudentViewAdvanceComponent } from './components/student-view-advance/student-view-advance.component';
import { StudentViewSkillsMilestonesComponent } from './containers/student-view-skills-milestones/student-view-skills-milestones.component';



@NgModule({
  declarations: [StudentViewComponent, StudentViewSkillsComponent, StudentViewAdvanceComponent, StudentViewSkillsRoadmapComponent, StudentViewSkillsProfileComponent, StudentViewSkillsTranscriptComponent, StudentViewSkillsMilestonesComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    StudentViewRoutingModule,
  ]
})
export class StudentViewModule { }
