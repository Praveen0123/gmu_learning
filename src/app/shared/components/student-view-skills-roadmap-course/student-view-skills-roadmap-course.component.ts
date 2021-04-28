import { Component, Input, OnInit } from '@angular/core';
import { Degree } from '@gql';

@Component({
  selector: 'gmu-student-view-skills-roadmap-course',
  templateUrl: './student-view-skills-roadmap-course.component.html',
  styleUrls: ['./student-view-skills-roadmap-course.component.scss']
})
export class StudentViewSkillsRoadmapCourseComponent implements OnInit
{


  @Input() degreeModel: Degree;
  constructor() { }

  ngOnInit(): void
  {
  }

}
