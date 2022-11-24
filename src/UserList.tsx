import React from "react";
import { UserType } from "./App";

function User({
  user,
  onRemove,
  onToggle,
}: {
  user: UserType;
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
}) {
  console.log("UserList 랜더링");
  return (
    <div>
      <b
        style={{
          cursor: "pointer",
          color: user.active ? "green" : "black",
        }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b>
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
}

function UserList({
  users,
  onRemove,
  onToggle,
}: {
  users: UserType[];
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
}) {
  return (
    <div>
      {users.map((user) => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default React.memo(UserList);
