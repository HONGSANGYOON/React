import React, { useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [workingTitle, setWorkingTitle] = useState("");
  const [workingContent, setWorkingContent] = useState("");
  const [completedUsers, setCompletedUsers] = useState([]);

  const addClick = () => {
    setWorkingTitle(title);
    setWorkingContent(content);

    const newUser = {
      id: users.length + 1,
      title: title,
      content: content,
    };
    setUsers([...users, newUser]);

    setTitle("");
    setContent("");
  };

  const deleteClick = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  const completeClick = (id) => {
    const userToComplete = users.find((user) => user.id === id);

    if (userToComplete) {
      // 사용자를 "Done" 목록으로 이동
      setCompletedUsers([...completedUsers, userToComplete]);

      // 기존 목록에서 삭제
      const updatedUsers = users.filter((user) => user.id !== id);
      setUsers(updatedUsers);
    }
  };
  //Done 목록에서 삭제
  const removeClick = (id) => {
    const removeUsers = users.filter((user) => user.id === id);
    setCompletedUsers(removeUsers);
  };

  return (
    <div className="container">
      <div>
        <h1 className="title">My Todo List</h1>
      </div>
      <div className="index">
        <div>
          제목:
          <input
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          ></input>
        </div>
        <div>
          내용:
          <input
            id="content"
            value={content}
            onChange={(event) => setContent(event.target.value)}
          ></input>
        </div>
        <button className="addbtn" onClick={addClick}>
          추가하기
        </button>
      </div>
      <div className="working" id="working">
        Working...!
      </div>
      {/* 추가한 내용 표시, 삭제하기 및 완료 버튼 */}
      {users.map((user) => (
        <div className="workingbox" key={user.id}>
          <div>제목 : {user.title}</div>
          <div>내용 : {user.content}</div>
          <button onClick={() => deleteClick(user.id)}>삭제하기</button>
          <button onClick={() => completeClick(user.id)}>완료</button>
        </div>
      ))}
      <div className="working" id="Done">
        Done!
      </div>
      {/* 완료한 내용 표시 */}
      {completedUsers.map((user) => (
        <div className="workingbox" key={user.id}>
          <div>제목 : {user.title}</div>
          <div>내용 : {user.content}</div>
          <button onClick={() => removeClick(user.id)}>취소</button>
        </div>
      ))}
    </div>
  );
}

export default App;
