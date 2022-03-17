import React from 'react';
import { Container, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles: any = makeStyles((theme: Theme) => ({
  footer: {
    textAlign: 'center',
    backgroundColor: theme.palette.secondary.main,
    padding: '10px 0',
    width: '100%',
    bottom: 0,
  },
}));

const Footer = () => {
  const classes = useStyles();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="sm">
        <Typography color="#FFF">
          © {currentYear} Daniel Lesner | All rights reserved
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
