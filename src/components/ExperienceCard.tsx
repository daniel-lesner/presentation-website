import { Box, Grid, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { TExperienceInfo } from '../types/types';

const useStyles: any = makeStyles((theme: Theme) => ({
  root: {
    color: '#fff',
    backgroundColor: theme.palette.secondary.main,
    borderRadius: '16px',
    boxShadow: '0px 15px 35px rgb(14 24 68 / 4%)',
    padding: '1rem',
    marginBottom: '2rem',
  },
  leftSection: {
    textAlign: 'center',
    marginTop: 5,
    color: '#ff8484',
    padding: '0 1rem',

    [theme.breakpoints.down('md')]: {
      width: '35%',
    },

    [theme.breakpoints.up('md')]: {
      width: '25%',
    },
  },
  period: {
    fontWeight: 'bold',
  },
  rightSection: {
    [theme.breakpoints.down('md')]: {
      width: '65%',
    },

    [theme.breakpoints.up('md')]: {
      width: '75%',
    },
  },
  titleArea: {
    marginLeft: '0.5rem',
    marginBottom: '0.8rem',
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
  },
  jobTitle: {
    fontStyle: 'italic',
    color: '#f4f1bb',
    paddingRight: '0.5rem',
  },
  content: {
    marginBottom: '0.5rem',
  },
}));

const ExperienceCard = (experienceInfo: TExperienceInfo, key: number) => {
  const classes = useStyles();
  const { title, company, location, period, duration, content } =
    experienceInfo;

  return (
    <Grid container className={classes.root} key={key}>
      <Grid item className={classes.leftSection}>
        <Typography className={classes.period}>{period}</Typography>
        <Typography fontSize="small">({duration})</Typography>
      </Grid>
      <Grid item className={classes.rightSection}>
        <Box className={classes.titleArea}>
          <Box className={classes.title}>
            <span>
              <Typography variant="h6">
                <span className={classes.jobTitle}>{title},</span>
                <span>{company}</span>
              </Typography>
            </span>
          </Box>
          <span>
            <Typography fontSize="small">{location}</Typography>
          </span>
        </Box>
        <Box>
          {content.map((item, index) => (
            <Typography key={index} className={classes.content}>
              {item}
            </Typography>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default ExperienceCard;
