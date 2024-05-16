import React, { useState } from "react";
import { Unstable_Popup as BasePopup } from "@mui/base/Unstable_Popup";
import { styled } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import ChatIcon from "@mui/icons-material/Chat";
import SearchIcon from "@mui/icons-material/Search";
import Divider from "@mui/material/Divider";
import MenuList from "@mui/material/MenuList";
import Friend from "./Friend";
import Chats from "./Chats";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
// import Check from "@mui/icons-material/Check";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
export default function SimplePopup() {
  const [anchor, setAnchor] = React.useState(null);
  const [friendList] = React.useState([
    "Abhishek",
    "Sumit",
    "Akshat",
    "Vikas",
    "Nikhil",
  ]);

  const [AllChats, SetAllChats] = useState([]);
  const [friendChat, SetFriendChat] = useState([]);
  const [Id, SetId] = useState(0);

  const [isChat, SetIsChat] = useState(false);

  const handleClick = (event) => {
    setAnchor(anchor ? null : event.currentTarget);
  };

  //   function handleClose() {}

  const open = Boolean(anchor);
  const id = open ? "simple-popup" : undefined;

  function SetCommentCount() {}

  const updateChat = () => {
    const existingChatIndex = AllChats.findIndex((chat) => chat.id === Id);

    if (existingChatIndex !== -1) {
      SetAllChats((prevChats) => {
        const updatedChats = [...prevChats];
        updatedChats[existingChatIndex] = { id: Id, content: friendChat };
        return updatedChats;
      });
    } else {
      SetAllChats((prevChats) => [
        ...prevChats,
        { id: Id, content: friendChat },
      ]);
    }
  };

  return (
    <div>
      <IconButton
        onClick={handleClick}
        size="large"
        sx={{ ml: 2 }}
        aria-controls={open ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <Avatar
          sx={{
            width: 50,
            height: 50,
          }}
        >
          <ChatIcon />
        </Avatar>
      </IconButton>
      <BasePopup id={id} open={open} anchor={anchor} placement="top-end">
        <PopupBody
          PaperProps={{
            style: { width: 500 },
          }}
        >
          {isChat ? (
            <div>
              <div className="back-button">
                <button
                  onClick={() => {
                    SetIsChat(false);
                    updateChat();
                    console.log(AllChats);
                  }}
                >
                  <ArrowBackIosNewIcon />
                </button>
              </div>
              <Chats
                SetCommentCount={SetCommentCount}
                SetFriendChat={SetFriendChat}
              />
            </div>
          ) : (
            <div className="chat">
              <div className="chat-header">
                <p>Chats</p>
                <div>
                  <button onClick={() => {}}>
                    <SearchIcon
                      className="search-icon"
                      sx={{
                        color: "gray",
                        height: 15,
                      }}
                    />
                  </button>

                  <input
                    type="text"
                    name="search"
                    placeholder="Search..."
                    //   value={commentText}
                    //   onChange={(event) => {
                    //     SetCommentText(event.target.value);
                    //   }}
                  ></input>
                </div>
              </div>
              <Divider />

              <MenuList dense>
                {friendList.map((friend, index) => {
                  return (
                    <Friend
                      friendName={friend}
                      key={index}
                      id={index}
                      SetIsChat={SetIsChat}
                      SetId={SetId}
                    />
                  );
                })}
              </MenuList>
            </div>
          )}
        </PopupBody>
      </BasePopup>
    </div>
  );
}

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const PopupBody = styled("div")(
  ({ theme }) => `
  width: max-content;
  padding: 12px 16px;
  margin: 8px;
  border-radius: 8px;
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  background-color: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  box-shadow: ${
    theme.palette.mode === "dark"
      ? `0px 4px 8px rgb(0 0 0 / 0.7)`
      : `0px 4px 8px rgb(0 0 0 / 0.1)`
  };
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  z-index: 1;
`
);
