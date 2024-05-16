import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
function Chats(props) {
  const [allChats, SetAllChats] = useState([]);
  const [commentText, SetCommentText] = useState("");
  return (
    <div>
      <div className="chat">
        {allChats.map((chat, index) => {
          return <p className="comment-text">{chat}</p>;
        })}

        <input
          type="text"
          name="comment"
          placeholder="Add a Comment..."
          value={commentText}
          onChange={(event) => {
            SetCommentText(event.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            props.SetCommentCount((preCount) => {
              return preCount + 1;
            });
            SetAllChats((preValue) => {
              return [commentText, ...preValue];
            });
            SetCommentText("");
          }}
        >
          <SendIcon />
        </button>
      </div>
    </div>
  );
}

export default Chats;
