import React from "react";
import { GitHubUser } from "../types/github";
import UserCard from "./UserCard";
import "../styles/UserList.css";

type Props = {
  users: GitHubUser[];
  selectedIds: number[];
  onToggleSelect: (id: number) => void;
  editMode: boolean;
};

const UserList: React.FC<Props> = ({ users, selectedIds, onToggleSelect, editMode }) => {
  if (!users.length) return <p className="no-results">No results</p>;

  return (
    <div className="user-list">
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          isSelected={selectedIds.includes(user.id)}
          onToggle={() => onToggleSelect(user.id)}
          editMode={editMode}
        />
      ))}
    </div>
  );
};

export default UserList;