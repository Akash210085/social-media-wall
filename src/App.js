import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import InputArea from "./InputArea";
import Post from "./Post";
import Chatpopup from "./Chatpopup";
function App() {
  const [input, setInput] = useState({
    title: "",
    content: "",
  });

  const [list, setList] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;
    setInput((preValue) => {
      if (name === "title") {
        return { title: value, content: preValue.content };
      } else {
        return { title: preValue.title, content: value };
      }
    });
  }

  function handleClick(event) {
    event.preventDefault();
    setList((preValue) => {
      return [input, ...preValue];
    });
    setInput({ title: "", content: "" });
  }

  function deleteItem(id) {
    setList((preValue) => {
      return preValue.filter((item, index) => {
        return id !== index;
      });
    });
  }
  return (
    <div>
      <Header />
      <InputArea
        onChanged={handleChange}
        onClicked={handleClick}
        titleValue={input.title}
        contentValue={input.content}
      />
      {list.map((item, index) => {
        return (
          <Post
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            deleteItem={deleteItem}
          />
        );
      })}
      <div className="chat-icon">
        <Chatpopup />
      </div>

      <Footer />
    </div>
  );
}

export default App;
