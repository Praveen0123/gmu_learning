
export const skillsRoadmapFeatureKey = 'Skills Roadmap';

export interface SkillsRoadmapModel
{

  id: string;
  studentName: string;
  areaOfStudy: string;
  novaDegree: string;
  masonDegree: string;
  successCoachName: string;
  successCoachEmail: string;
  chortYear: string;
  careerDescription: string;
  expectedGradutionDate: string;
  occupationLists: occupationListsModel[];
}

export interface occupationListsModel
{
  description: string;
  imageName: string;
  onetCode: string;
  projectedGrowthRate: string;
  projectedJobOpenings2018To2028: number;
  title: string;
  typicalEducationLevelGroupId: number;
  typicalLevelOfEducation: string;
  typicalWorkExperience: string;
  typicalWorkExperienceGroupId: number;
  videoId: string;
  vpOccupationId: string;
  preferredSalary: preferredSalaryModel;

}
export interface preferredSalaryModel
{
  maximumSalaryPerHour: number;
  maximumSalaryPerYear: number;
  medianSalaryPerHour: number;
  medianSalaryPerYear: number;
  minimumSalaryPerHour: number;
  minimumSalaryPerYear: number;
  salaryPrecisionType: string;
}

export interface SkillsRoadmapState
{
  skillRoadmapList: SkillsRoadmapModel[];
  error: any;
}

export const initialStudentState: SkillsRoadmapState =
{
  skillRoadmapList: undefined,
  error: null
};