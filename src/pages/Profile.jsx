import { useState } from "react";
import { C, FM, FN } from "../constants/theme";
import { Bell, ShieldCheck, Lock, Globe2, HelpCircle, ArrowRight } from "lucide-react";
import ModalShell from "../components/ModalShell";

const profileSections = [
  { title: "Security & biometrics", subtitle: "Face ID, PIN, 2FA", icon: ShieldCheck },
  { title: "Notifications", subtitle: "Push, email, SMS", icon: Bell },
  { title: "Privacy", subtitle: "Data & permissions", icon: Lock },
  { title: "Language & region", subtitle: "English (US) · USD", icon: Globe2 },
  { title: "Help center", subtitle: "FAQ & support", icon: HelpCircle },
];

function Profile() {
  const [showEdit, setShowEdit] = useState(false);
  const [profile, setProfile] = useState({
    name: "Alex Morgan",
    email: "alex.morgan@walletx.app",
    handle: "@alexmorgan",
  });
  const [draft, setDraft] = useState(profile);

  const openEdit = () => {
    setDraft(profile);
    setShowEdit(true);
  };

  const saveEdit = () => {
    setProfile(draft);
    setShowEdit(false);
  };

  return (
    <div style={{padding: 14}}>
      <div style={{
        background: C.surface,
        border: `1px solid ${C.border}`,
        borderRadius: 28,
        padding: 24,
        marginBottom: 22,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 20,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{
            width: 100,
            height: 100,
            borderRadius: 42,
            background: "linear-gradient(135deg, #7C3AED, #6366F1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: 28,
            fontWeight: 800,
            fontFamily: FM,
          }}>
            {profile.name.split(" ").map((part) => part[0]).join("").slice(0, 2)}
          </div>
          <div>
            <p style={{ fontFamily: FM, fontSize: 20, fontWeight: 700, color: C.text, margin: 0 }}>
              {profile.name}
            </p>
            <p style={{ fontFamily: FM, fontSize: 13, color: C.muted, margin: "8px 0 0" }}>
              {profile.email} · {profile.handle}
            </p>
            <span style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              marginTop: 12,
              padding: "6px 12px",
              borderRadius: 999,
              background: "rgba(16, 185, 129, 0.12)",
              color: C.green,
              fontFamily: FM,
              fontSize: 12,
              fontWeight: 700,
            }}>
              <ShieldCheck size={14} /> Verified
            </span>
          </div>
        </div>

        <button
          onClick={openEdit}
          style={{
            border: `1px solid ${C.border}`,
            background: C.card,
            color: C.text,
            borderRadius: 18,
            padding: "12px 22px",
            fontFamily: FM,
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          Edit
        </button>
      </div>

      <div style={{
        background: C.surface,
        border: `1px solid ${C.border}`,
        borderRadius: 28,
        padding: 18,
      }}>
        {profileSections.map((section) => {
          const Icon = section.icon;
          return (
            <div key={section.title} style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 18,
              padding: "18px 0",
              borderBottom: `1px solid ${C.border}`,
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{
                  width: 48,
                  height: 48,
                  borderRadius: 16,
                  background: "rgba(147, 51, 234, 0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#7C3AED",
                }}>
                  <Icon size={20} />
                </div>
                <div>
                  <p style={{ fontFamily: FM, fontSize: 15, fontWeight: 700, color: C.text, margin: 0 }}>
                    {section.title}
                  </p>
                  <p style={{ fontFamily: FM, fontSize: 12, color: C.muted, margin: "6px 0 0" }}>
                    {section.subtitle}
                  </p>
                </div>
              </div>
              <ArrowRight size={18} color={C.muted} />
            </div>
          );
        })}

        <button style={{
          width: "100%",
          marginTop: 18,
          border: `1px solid rgba(239, 68, 68, 0.15)`,
          background: "rgba(239, 68, 68, 0.06)",
          color: "#DC2626",
          borderRadius: 20,
          padding: "14px 16px",
          fontFamily: FM,
          fontWeight: 700,
          cursor: "pointer",
        }}>
          Sign out
        </button>
      </div>

      {showEdit && (
        <ModalShell onClose={() => setShowEdit(false)} width={520}>
          <h2 style={{
            fontFamily: FM,
            fontSize: 26,
            fontWeight: 800,
            color: C.text,
            margin: 0,
          }}>
            Edit profile
          </h2>
          <p style={{
            fontFamily: FM,
            fontSize: 14,
            color: C.muted,
            margin: "10px 0 24px",
          }}>
            Update your account details and profile information.
          </p>

          {[
            { label: "Full name", value: draft.name, setter: (value) => setDraft((prev) => ({ ...prev, name: value })) },
            { label: "Email", value: draft.email, setter: (value) => setDraft((prev) => ({ ...prev, email: value })) },
            { label: "Username", value: draft.handle, setter: (value) => setDraft((prev) => ({ ...prev, handle: value })) },
          ].map((field) => (
            <div key={field.label} style={{ marginBottom: 16 }}>
              <label style={{
                display: "block",
                color: C.muted,
                fontFamily: FM,
                fontSize: 12,
                marginBottom: 8,
              }}>
                {field.label}
              </label>
              <input
                value={field.value}
                onChange={(e) => field.setter(e.target.value)}
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  borderRadius: 16,
                  border: `1px solid ${C.border}`,
                  background: C.bg,
                  color: C.text,
                  fontFamily: FM,
                  fontSize: 14,
                  outline: "none",
                }}
              />
            </div>
          ))}

          <button
            onClick={saveEdit}
            style={{
              width: "100%",
              padding: "16px 0",
              marginTop: 8,
              background: "linear-gradient(135deg, #7C5CFF, #A56BFF)",
              border: "none",
              borderRadius: 16,
              color: "#fff",
              fontFamily: FM,
              fontWeight: 700,
              fontSize: 15,
              cursor: "pointer",
            }}
          >
            Save changes
          </button>
        </ModalShell>
      )}
    </div>
  );
}

export default Profile;
