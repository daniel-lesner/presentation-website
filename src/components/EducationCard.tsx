import React from 'react';
import { Box, Grid, Typography, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { TEducationInfo } from '../types/types';

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
  rightSection: {
    [theme.breakpoints.down('md')]: {
      width: '65%',
    },

    [theme.breakpoints.up('md')]: {
      width: '75%',
    },
  },
  period: {
    fontWeight: 'bold',
  },
  titleArea: {
    marginLeft: '0.5rem',
    marginBottom: '0.8rem',
    display: 'flex',
    flexDirection: 'row',
  },
  degree: {
    fontStyle: 'italic',
    color: '#f4f1bb',
    paddingRight: '0.5rem',
  },
  content: {
    marginBottom: '0.5rem',
  },
}));

const EducationCard = (educationInfo: TEducationInfo, key: number) => {
  const classes = useStyles();
  const { institution, degree, period, duration, content } = educationInfo;

  return (
    <Grid container className={classes.root} key={key}>
      <Grid item className={classes.leftSection}>
        <Typography className={classes.period}>{period}</Typography>
        <Typography fontSize="small">({duration})</Typography>
      </Grid>
      <Grid item className={classes.rightSection}>
        <Box className={classes.titleArea}>
          <Typography variant="h6">
            {degree && <span className={classes.degree}> {degree},</span>}
            <span> {institution}</span>
          </Typography>
        </Box>
        <Box>
          {content.map((item: string, index: number) => (
            <Typography key={index} className={classes.content}>
              {item}
            </Typography>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default EducationCard;
