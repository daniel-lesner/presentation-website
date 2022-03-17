export type TProjectInfo = {
  title: string,
  github: string,
  link: string,
  description: string,
  keyFeatures: string[],
};

export type TExperienceInfo = {
  title: string,
  company: string,
  location: string,
  period: string,
  duration: string,
  content: string[],
};

export type TEducationInfo = {
  institution: string,
  degree: string,
  grade: number | undefined,
  period: string,
  duration: string,
  content: string[],
};
