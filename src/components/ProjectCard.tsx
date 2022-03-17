import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Grid, Typography, Theme, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { TProjectInfo } from '../types/types';

const useStyles: any = makeStyles((theme: Theme) => ({
  root: {
    padding: '1rem',
    minHeight: '30vh',
    color: '#FFF',
    backgroundColor: theme.palette.secondary.main,
    borderRadius: '16px',
    boxShadow: '0px 15px 35px rgb(14 24 68 / 4%)',
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    textAlign: 'center',
    marginBottom: '1rem',
    color: '#f4f1bb',
  },
  description: {
    marginBottom: '0.5rem',
  },
  tagsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '1rem',
    flexWrap: 'wrap',
  },
  tag: {
    color: '#ff8484',
    padding: '0.2rem',
    fontSize: 'small',
  },
  linksContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: 'auto',
  },
  link: {
    color: '#fff',
    padding: '0 0.2rem',
  },
}));

const ProjectCard = (projectInfo: TProjectInfo, key: number) => {
  const classes = useStyles();
  const { title, github, link, description, keyFeatures } = projectInfo;

  return (
    <Grid key={key} item xs={4} sm={4} md={4}>
      <Box className={classes.root}>
        <Box className={classes.title}>
          <Typography variant="h5">{title}</Typography>
        </Box>
        <Box className={classes.description}>
          <Typography>{description}</Typography>
        </Box>
        <Box className={classes.tagsContainer}>
          {keyFeatures.map((item: string, index: number) => (
            <div className={classes.tag} key={index}>
              {item}
            </div>
          ))}
        </Box>
        <Box className={classes.linksContainer}>
          {github && (
            <Link href={github} className={classes.link} target="_blank">
              <GitHubIcon />
            </Link>
          )}
          {link && (
            <Link href={link} className={classes.link} target="_blank">
              <LaunchIcon />
            </Link>
          )}
        </Box>
      </Box>
    </Grid>
  );
};

export default ProjectCard;
