import React from 'react';
import { Box, Container, Grid, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ProjectCard from './ProjectCard';
import { TProjectInfo, TExperienceInfo, TEducationInfo } from '../types/types';
import {
  experienceInfoArray,
  projectInfoArray,
  educationInfoArray,
} from '../content';
import ExperienceCard from './ExperienceCard';
import EducationCard from './EducationCard';
import IntroSection from './IntroSection';

const useStyles: any = makeStyles((theme: Theme) => ({
  section: { paddingBottom: '8rem' },
  sectionTitle: {
    paddingBottom: '2rem',
  },
}));

const Main = () => {
  const classes = useStyles();

  return (
    <main>
      <IntroSection />
      <Container id="projects" maxWidth="xl" className={classes.section}>
        <Typography
          variant="h3"
          align="center"
          color="secondary"
          className={classes.sectionTitle}
        >
          Projects
        </Typography>
        <Grid
          container
          spacing={2}
          columns={{ sm: 4, md: 8, lg: 12 }}
          style={{ justifyContent: 'center' }}
        >
          {projectInfoArray &&
            projectInfoArray.map((item: TProjectInfo, key: number) => (
              <ProjectCard {...item} key={key} />
            ))}
        </Grid>
      </Container>
      <Container id="experience" maxWidth="md" className={classes.section}>
        <Typography
          variant="h3"
          align="center"
          color="secondary"
          className={classes.sectionTitle}
        >
          Experience
        </Typography>
        <Box>
          {experienceInfoArray &&
            experienceInfoArray.map((item: TExperienceInfo, key: number) => (
              <ExperienceCard {...item} key={key} />
            ))}
        </Box>
      </Container>
      <Container id="education" maxWidth="sm" className={classes.section}>
        <Typography
          variant="h3"
          align="center"
          color="secondary"
          className={classes.sectionTitle}
        >
          Education
        </Typography>
        <Box>
          {educationInfoArray &&
            educationInfoArray.map((item: TEducationInfo, key: number) => (
              <EducationCard {...item} key={key} />
            ))}
        </Box>
      </Container>
    </main>
  );
};

export default Main;
