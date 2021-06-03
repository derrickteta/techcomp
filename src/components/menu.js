import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div Style="position:absolute; right:1%; top:1%;">
      <Button  aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
       Ajouter Service
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Radiologie</MenuItem>
        <MenuItem onClick={handleClose}>Odontologie</MenuItem>
        <MenuItem onClick={handleClose}>Pédiatrie</MenuItem>
        <MenuItem onClick={handleClose}>Ophtamologie</MenuItem>
      </Menu>
    </div>
  );
}
