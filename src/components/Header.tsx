import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Theme,
  Container,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Link,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';

const menuLinks = [
  { to: '/#', text: 'Home' },
  { to: '/#projects', text: 'Projects' },
  { to: '/#experience', text: 'Experience' },
  { to: '/#education', text: 'Education' },
];

const useStyles: any = makeStyles((theme: Theme) => ({
  title: {},
}));

const Header = () => {
  const classes = useStyles();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar color="secondary">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="div"
            color="primary"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            Daniel Lesner
          </Typography>
          <Typography
            variant="h5"
            noWrap
            component="div"
            color="primary"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            Daniel Lesner
          </Typography>
          <Box
            justifyContent="flex-end"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {menuLinks.map((item) => (
                <MenuItem key={item.text} onClick={handleCloseNavMenu}>
                  <Link
                    href={item.to}
                    key={item.text}
                    color="#000"
                    style={{ textDecoration: 'none' }}
                  >
                    <Typography textAlign="center">{item.text}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            justifyContent="flex-end"
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
          >
            {menuLinks.map((item) => (
              <Button
                key={item.text}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link
                  href={item.to}
                  key={item.text}
                  color="#fff"
                  style={{ textDecoration: 'none' }}
                >
                  {item.text}
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
