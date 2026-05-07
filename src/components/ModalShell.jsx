import { C } from "../constants/theme";

function ModalShell({ onClose, children, width = 420 }) {
  return (
    <div
      onClick={(e) => e.target === e.currentTarget && onClose()}
      style={{
        position: "fixed",
        inset: 0,
        background: "#00000099",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div style={{
        background: C.surface,
        border: `1px solid ${C.border}`,
        borderRadius: 24,
        padding: 32,
        width,
        position: "relative",
      }}>
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            background: C.card,
            border: `1px solid ${C.border}`,
            color: C.muted,
            borderRadius: 8,
            width: 30,
            height: 30,
            cursor: "pointer",
            fontSize: 14,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}

export default ModalShell;