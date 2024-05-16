import React, { useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Divider from "@mui/material/Divider";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

import Chats from "./Chats";
function Post(props) {
  const [likeCount, SetLikeCount] = useState(0);
  const [commentCount, SetCommentCount] = useState(0);
  const [openChats, SetOpenChats] = useState(false);

  function DeleteItem() {
    props.deleteItem(props.id);
  }

  return (
    <div className="post">
      <button onClick={DeleteItem}>
        <DeleteOutlineIcon />
      </button>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Divider />

      <div className="like-comment-count">
        <p className="comment-count">{commentCount}</p>
        <p className="like-count">{likeCount}</p>
      </div>
      <div className="likeicon">
        <button
          onClick={() => {
            SetLikeCount((preCount) => {
              return preCount + 1;
            });
          }}
        >
          <ThumbUpOffAltIcon />
        </button>
      </div>

      <div className="comment-icon">
        <button
          onClick={() => {
            SetOpenChats(true);
          }}
        >
          <ChatBubbleOutlineIcon />
        </button>
      </div>
      {openChats && <Chats SetCommentCount={SetCommentCount} />}
    </div>
  );
}

export default Post;
