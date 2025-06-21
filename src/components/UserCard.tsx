import React from "react";
import { GitHubUser } from "../types/github";
import "../styles/UserCard.css";

type Props = {
  user: GitHubUser;
  isSelected: boolean;
  onToggle: () => void;
  editMode: boolean;
};

const UserCard: React.FC<Props> = ({ user, isSelected, onToggle, editMode }) => {
  return (
    <div className="user-card">
      {editMode && (
        <input
          type="checkbox"
          className="checkbox"
          checked={isSelected}
          onChange={onToggle}
          title="Select user"
        />
      )}
      <img src={user.avatar_url} alt={user.login} className="card-avatar" />
      <div className="card-info">
        <span>{user.id}</span>
        <strong>{user.login}</strong>
      </div>
      <a href={user.html_url} className="card-button" target="_blank" rel="noreferrer">
        View profile
      </a>
    </div>
  );
};

export default UserCard;