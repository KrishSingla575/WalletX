import { C, FM, FN } from "../constants/theme";
import { Bell, ShieldCheck, Lock, Globe2, HelpCircle, ArrowRight } from "lucide-react";

const profileSections = [
  { title: "Security & biometrics", subtitle: "Face ID, PIN, 2FA", icon: ShieldCheck },
  { title: "Notifications", subtitle: "Push, email, SMS", icon: Bell },
  { title: "Privacy", subtitle: "Data & permissions", icon: Lock },
  { title: "Language & region", subtitle: "English (US) · USD", icon: Globe2 },
  { title: "Help center", subtitle: "FAQ & support", icon: HelpCircle },
];

function Profile() {
  return (
    <div style={{ padding: 24 }}>
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontFamily: "Inter, sans-serif", color: C.text, fontSize: 36, fontWeight: 800, margin: 0 }}>
          Profile
        </h1>
      </div>

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
            width: 80,
            height: 80,
            borderRadius: 22,
            background: "linear-gradient(135deg, #7C3AED, #6366F1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: 28,
            fontWeight: 800,
            fontFamily: FM,
          }}>
            AM
          </div>
          <div>
            <p style={{ fontFamily: FM, fontSize: 20, fontWeight: 700, color: C.text, margin: 0 }}>
              Alex Morgan
            </p>
            <p style={{ fontFamily: FM, fontSize: 13, color: C.muted, margin: "8px 0 0" }}>
              alex.morgan@walletx.app · @alexmorgan
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

        <button style={{
          border: `1px solid ${C.border}`,
          background: C.card,
          color: C.text,
          borderRadius: 18,
          padding: "12px 22px",
          fontFamily: FM,
          fontWeight: 700,
          cursor: "pointer",
        }}>
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
    </div>
  );
}

export default Profile;
