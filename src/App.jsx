import { useState, useEffect } from "react";
import { C, FM } from "./constants/theme";
import { navItems } from "./data/navItems";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import MyCards from "./pages/MyCards";
import Analytics from "./pages/Analytics";
import Profile from "./pages/Profile";
import SendModal from "./components/SendModal";
import ReceiveModal from "./components/ReceiveModal";

function App() {
  const [page, setPage] = useState("dashboard");
  const [showSend, setShowSend] = useState(false);
  const [showReceive, setShowReceive] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Mono:wght@400;500&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const pageMap = {
    dashboard: <Dashboard onSend={() => setShowSend(true)} onReceive={() => setShowReceive(true)} />,
    cards: <MyCards />,
    transactions: <Transactions />,
    analytics: <Analytics />,
    profile: <Profile/>,
  };

  const pageHeaders = {
    dashboard: {title: "Welcome back, Alex"},
    cards: {title: "Your cards"},
    transactions: {title: "Transactions"},
    profile: {title: "Profile"},
    analytics: {title: "Analytics"},
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        background: C.bg,
        overflow: "hidden",
        fontFamily: FM,
      }}
    >
      {showSend && <SendModal onClose={() => setShowSend(false)} />}
      {showReceive && <ReceiveModal onClose={() => setShowReceive(false)} />}

      <div
        style={{
          width: 210,
          background: C.surface,
          borderRight: `1px solid ${C.border}`,
          display: "flex",
          flexDirection: "column",
          padding: "26px 14px",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "0 8px",
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 42,
              height: 42,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #7C5CFF, #8B6CFF)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 18px 40px rgba(124, 92, 255, 0.2)",
              color: "#fff",
              fontSize: 18,
            }}
          >
            <i className="fas fa-wallet" />
          </div>
          <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 1000, fontSize: 20, color: C.text }}>
            WalletX
          </span>
        </div>
        <nav style={{ flex: 1 }}>
          {navItems.map((item) => {
            const active = page === item.id;
            const isAction = item.id === "send" || item.id === "receive";
            return (
              <button
                key={item.id}
                onClick={() => {
                  setShowNotifications(false);
                  if (item.id === "send") return setShowSend(true);
                  if (item.id === "receive") return setShowReceive(true);
                  setPage(item.id);
                }}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "11px 12px",
                  borderRadius: 11,
                  border: "none",
                  background: active ? `${C.purple}18` : "transparent",
                  color: active ? C.purple : C.text,
                  fontFamily: "Inter, sans-serif",
                  fontSize: 13,
                  cursor: "pointer",
                  fontWeight: active ? 600 : 400,
                  marginBottom: 3,
                  textAlign: "left",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  if (!active) e.currentTarget.style.background = `${C.border}66`;
                }}
                onMouseLeave={(e) => {
                  if (!active) e.currentTarget.style.background = "transparent";
                }}
              >
                <span style={{ fontSize: 15, width: 20, textAlign: "center" }}>
                  {item.icon}
                </span>
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>

      <div style={{ flex: 1, overflowY: "auto", padding: "30px 32px", position: "relative" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 18,
            flexWrap: "wrap",
            marginBottom: 24,
          }}
        >
          <div>
            <h1 style={{ fontFamily: "Inter, sans-serif", color: C.text, fontSize: 35, fontWeight: 800, margin: 0 }}>
              {pageHeaders[page]?.title}
            </h1>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
            <button
              onClick={() => setShowNotifications((prev) => !prev)}
              style={{
                position: "relative",
                width: 44,
                height: 44,
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,0.12)",
                background: C.card,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: C.text,
              }}
            >
              <i className="fas fa-bell" style={{ fontSize: 16 }} />
              <span
                style={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "#6C63FF",
                  boxShadow: "0 0 0 3px rgba(108, 99, 255, 0.1)",
                }}
              />
            </button>
            <button
              onClick={() => {
                setShowNotifications(false);
                setPage("profile");
              }}
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #7C5CFF, #A56BFF)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontWeight: 700,
                fontSize: 14,
                boxShadow: "0 20px 40px rgba(124, 92, 255, 0.12)",
                border: "none",
                cursor: "pointer",
              }}
            >
              AM
            </button>
          </div>
        </div>
        {showNotifications && (
          <div style={{
            position: "absolute",
            top: 92,
            right: 32,
            width: 320,
            background: C.surface,
            border: `1px solid ${C.border}`,
            borderRadius: 24,
            boxShadow: "0 28px 80px rgba(0, 0, 0, 0.16)",
            padding: 22,
            zIndex: 20,
          }}>
            <h3 style={{ fontFamily: FM, fontSize: 18, color: C.text, margin: 0 }}>
              No new notifications
            </h3>
            <p style={{ fontFamily: FM, fontSize: 14, color: C.muted, margin: "10px 0 0" }}>
              You're all caught up.
            </p>
          </div>
        )}
        {pageMap[page]}
      </div>
    </div>
  );
}

export default App;