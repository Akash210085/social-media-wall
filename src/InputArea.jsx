import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function InputArea(props) {
  const [expand, setExpand] = useState(false);

  function expanText() {
    setExpand(true);
  }
  return (
    <div>
      <form className="create-post">
        {expand && (
          <input
            onChange={props.onChanged}
            name="title"
            placeholder="Title"
            value={props.titleValue}
          />
        )}

        <textarea
          onClick={expanText}
          onChange={props.onChanged}
          name="content"
          placeholder="Add a Post..."
          rows={expand ? 3 : 1}
          value={props.contentValue}
        />
        <Zoom in={expand}>
          <Fab onClick={props.onClicked}>
            {" "}
            <AddIcon />{" "}
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default InputArea;
