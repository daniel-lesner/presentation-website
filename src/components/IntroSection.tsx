import { Container, Typography, Theme, Stack, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';
import { makeStyles } from '@mui/styles';
import Emoji from 'a11y-react-emoji';
import React from 'react';
import '@fontsource/press-start-2p';

const useStyles: any = makeStyles((theme: Theme) => ({
  root: {
    paddingBottom: '6rem',
    marginTop: '6rem',
  },
  upperSection: {
    padding: '1rem 0',
  },
  middleSection: {
    marginTop: '1rem',
    padding: '1rem 0',
    backgroundColor: theme.palette.secondary.main,
    borderRadius: '16px',
    boxShadow: '0px 15px 35px rgb(14 24 68 / 4%)',
  },
  lowerSection: {
    padding: '2rem 0',
    justifyItems: 'center',
  },
  text: {
    margin: '0 10px 1rem',
  },
  buttonStack: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: '15rem',
    maxWidth: '20rem',
  },
  title: {
    fontFamily: '"Press Start 2P", cursive;',
  },
}));

const IntroSection = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Container maxWidth="md" className={classes.upperSection}>
        <Typography
          variant="h4"
          align="center"
          color="secondary"
          className={classes.title}
        >
          Front-end developer
        </Typography>
        <Typography variant="h5" align="center" color="secondary">
          <Emoji symbol="💻" label="computer" /> I love coding and creating web
          applications
        </Typography>
      </Container>
      <Container maxWidth="sm" className={classes.middleSection}>
        <Typography variant="h3" align="center" color="#f4f1bb">
          About me
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="#FFF"
          className={classes.text}
        >
          Passionate about programming and web development
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="#FFF"
          className={classes.text}
        >
          Interested in blockchain technology and cryptocurrency
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="#FFF"
          className={classes.text}
        >
          Economics graduate, with a strong background in mathematics and
          statistics
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="#FFF"
          className={classes.text}
        >
          Strong knowledge of Javascript, Typescript and React
        </Typography>
      </Container>
      <Container maxWidth="md" className={classes.lowerSection}>
        <Stack
          spacing={2}
          className={classes.buttonStack}
          direction={{ xs: 'column', md: 'row' }}
        >
          <Button
            className={classes.button}
            variant="contained"
            startIcon={<DownloadIcon />}
            color="secondary"
            href="/CV_Daniel_Lesner.pdf"
            download
          >
            Download CV
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            startIcon={<LinkedInIcon />}
            href="https://linkedin.com/in/daniel-lesner"
            target="_blank"
            color="secondary"
          >
            Visit Linkedin Page
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            startIcon={<GitHubIcon />}
            href="http://github.com/daniel-lesner"
            target="_blank"
            color="secondary"
          >
            Visit GitHub Page
          </Button>
        </Stack>
      </Container>
    </Container>
  );
};

export default IntroSection;
