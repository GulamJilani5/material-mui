import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import { useState } from "react";

export default function Navbar() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [open, setOpen] = useState < null | boolean | any>(anchorEl);
//   const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    // by default AppBar is fixed.
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" color="inherit" edge="start" area-label="logo">
          <CatchingPokemonIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          PokemonApp
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About Us</Button>
          <Button color="inherit">Features</Button>
          <Button
            color="inherit"
            onClick={handleClick}
            id="resource-button"
            aria-controls={open ? "resources-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            Resources
          </Button>
          <Button color="inherit">Login</Button>
        </Stack>
        <Menu
          id="resources-menu"
          anchorEl={anchorEl}
          open={open}
          MenuListProps={{
            "aria-labelledby": "resources-button",
          }}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Blog</MenuItem>
          <MenuItem onClick={handleClose}>Podcast</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
