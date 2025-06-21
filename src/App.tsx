import React, { useState, useCallback } from "react";
import "./styles/App.css";

import { GitHubUser } from "./types/github";
import SearchInput from "./components/SearchInput";
import UserList from "./components/UserList";
import ActionsBar from "./components/ActionsBar";

function App() {
  const [users, setUsers] = useState<GitHubUser[]>([]);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [editMode, setEditMode] = useState(false);

  const toggleEditMode = () => {
    setEditMode((prev) => !prev);
    if (editMode) {
      setSelectedIds([]); 
    }
  };
  const toggleSelect = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((el) => el !== id) : [...prev, id]
    );
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedIds(users.map((u) => u.id));
    } else {
      setSelectedIds([]);
    }
  };

  const deleteSelected = () => {
    setUsers((prev) => prev.filter((user) => !selectedIds.includes(user.id)));
    setSelectedIds([]);
  };

  const duplicateSelected = () => {
    const toDuplicate = users.filter((user) => selectedIds.includes(user.id));
    const duplicated = toDuplicate.map((user) => ({
      ...user,
      id: Date.now() + Math.random(),
    }));
    setUsers((prev) => [...prev, ...duplicated]);
  };

  const handleSearchChange = useCallback((results: GitHubUser[]) => {
    setUsers(results);
    setSelectedIds([]);
  }, []);

  return (
    <div className="App">
      <div className="sticky-header">
        <header className="App-header">
          <h1>Github Search</h1>
        </header>
        <SearchInput onResults={handleSearchChange} />
        <ActionsBar
          editMode={editMode}
          selectedCount={selectedIds.length}
          onToggleEdit={toggleEditMode}
          onDuplicate={duplicateSelected}
          onDelete={deleteSelected}
          totalCount={users.length}
          onSelectAll={handleSelectAll}
        />
      </div>
        <UserList
          users={users}
          selectedIds={selectedIds}
          onToggleSelect={toggleSelect}
          editMode={editMode}
        />
    </div>
  );
}

export default App;


