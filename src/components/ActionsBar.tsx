import React from "react";
import "../styles/ActionsBar.css";

type Props = {
  editMode: boolean;
  selectedCount: number;
  onToggleEdit: () => void;
  onDuplicate: () => void;
  onDelete: () => void;
  onSelectAll: (checked: boolean) => void;
  totalCount: number;
};

const ActionsBar: React.FC<Props> = ({
  editMode,
  selectedCount,
  onToggleEdit,
  onDuplicate,
  onDelete,
  onSelectAll,
  totalCount,
}) => {
  const allSelected = totalCount > 0 && selectedCount === totalCount;

  return (
    <div className="actions-bar-container">
      <button
        className={`edit-toggle-btn ${editMode ? "on" : "off"}`}
        onClick={onToggleEdit}
      >
        {editMode ? "Exit Edit Mode" : "Enter Edit Mode"}
      </button>
      <div className="actions-bar">
        <div className="edit-toggle">
          <div className="select-all">
            {editMode && (
              <label className="select-all-label">
                <span className="select-all-text">
                  {" "}
                  {allSelected ? `Deselect All` : `Select All`}
                </span>
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={allSelected}
                  onChange={(e) => onSelectAll(e.target.checked)}
                />
                <span className="select-all-label">
                  {selectedCount > 0 && (
                    <>
                      <strong>{selectedCount}</strong>{" "}
                      {selectedCount === 1
                        ? "element selected"
                        : "elements selected"}
                    </>
                  )}
                </span>
              </label>
            )}
          </div>
        </div>
        <div className="actions">
          {editMode && (
            <>
              <img
                onClick={onDuplicate}
                className="icon"
                src="/images/duplicate.svg"
                alt="Duplicate"
                title="Duplicate"
              />
              <img
                onClick={onDelete}
                className="icon"
                src="/images/trash.svg"
                alt="Delete"
                title="Delete"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActionsBar;
