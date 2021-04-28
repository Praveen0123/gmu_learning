
import { Component, OnInit, OnChanges, SimpleChange, SimpleChanges, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { NavigationService } from '@app/core/services/navigation/navigation.service';
import { Occupation, AreaOfStudy, Pathway } from '@gql';
import { OccupationFacadeService } from '@app/root-store/occupation-store/occupation-facade.service';

import { SkillsRoadmapFacadeService } from '@app/root-store/student-skills-roadmap-store/skills-roadmap-facade.service';

import { AreaOfStudyFacadeService } from '@app/root-store/area-of-study-store/area-of-study-facade.service';
import { SkillsRoadmapModel } from '@app/root-store/student-skills-roadmap-store/skills-roadmap-state';
import { PathwayFacadeService } from '@app/root-store/pathway-store/pathway-facade.service';




@Component({
  selector: 'gmu-student-view-skills-roadmap',
  templateUrl: './student-view-skills-roadmap.component.html',
  styleUrls: ['./student-view-skills-roadmap.component.scss']
})
export class StudentViewSkillsRoadmapComponent implements OnInit
{
  occupationProfileModel$: Observable<Occupation>;
  areaOfStudyList$: Observable<AreaOfStudy[]>;
  pathway$: Observable<Pathway>;
  skillRoadmap$: Observable<SkillsRoadmapModel[]>;


  constructor(
    private occupationFacadeService: OccupationFacadeService,
    private areaOfStudyFacadeService: AreaOfStudyFacadeService,
    private navigationService: NavigationService,
    private SkillsRoadmapFacadeService: SkillsRoadmapFacadeService,
    private pathwayFacadeService: PathwayFacadeService,

  ) { }

  ngOnInit(): void
  {

    this.occupationProfileModel$ = this.occupationFacadeService.getOccupationDetails();
    this.skillRoadmap$ = this.SkillsRoadmapFacadeService.getskillRoadmapList();
    this.pathway$ = this.pathwayFacadeService.getPathway();

  }
  onAreaOfStudyClick(areaOfStudy: AreaOfStudy)
  {
    this.areaOfStudyFacadeService.setSelectedAreaOfStudy(areaOfStudy);
    this.navigationService.goToAreaOfStudyOccupationList(areaOfStudy);
  }

  onOccupationClick(occupation: Occupation)
  {
    this.navigationService.goToOccupationDetailPage(occupation.vpOccupationId);
  }




}
