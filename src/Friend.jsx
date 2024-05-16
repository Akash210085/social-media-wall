import React from "react";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import PersonIcon from "@mui/icons-material/Person";
function Friend(props) {
  return (
    <MenuItem
      onClick={(event) => {
        console.log(props.id);
        props.SetId(props.id);
        props.SetIsChat(true);
      }}
    >
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      {props.friendName}
    </MenuItem>
  );
}

export default Friend;
