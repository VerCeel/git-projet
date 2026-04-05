import { useState } from "react";

const EmailForm = () => {
  const [formData, setFormData] = useState({
    nom: "",
    entreprise: "",
    email: "",
    telephone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.card}>
        <div style={styles.row}>
          <input
            style={styles.inputHalf}
            type="text"
            name="nom"
            placeholder="Nom / Prénom"
            value={formData.nom}
            onChange={handleChange}
          />
          <input
            style={styles.inputHalf}
            type="text"
            name="entreprise"
            placeholder="Entreprise"
            value={formData.entreprise}
            onChange={handleChange}
          />
        </div>

        <input
          style={styles.inputFull}
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          style={styles.inputFull}
          type="tel"
          name="telephone"
          placeholder="Numéro de téléphone"
          value={formData.telephone}
          onChange={handleChange}
        />

        <textarea
          style={styles.textarea}
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
        />

        <button style={styles.button} onClick={handleSubmit}>
          Envoyer
        </button>
      </div>

      <style>{`
        input::placeholder,
        textarea::placeholder {
          color: #9ca3b0;
        }
        input:focus,
        textarea:focus {
          outline: none;
          border-color: #6c5ce7;
          box-shadow: 0 0 0 2px rgba(108, 92, 231, 0.25);
        }
        button:hover {
          background: #e8650a !important;
        }
        button:active {
          transform: scale(0.98);
        }
      `}</style>
    </div>
  );
};

const base = {
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "8px",
  color: "#e2e8f0",
  fontSize: "14px",
  padding: "14px 16px",
  width: "100%",
  boxSizing: "border-box",
  transition: "border-color 0.2s, box-shadow 0.2s",
};

const styles = {
  overlay: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    background: "radial-gradient(ellipse at 60% 40%, #2d1b4e 0%, #1a1a2e 50%, #0d0d1a 100%)",
    fontFamily: "'Segoe UI', sans-serif",
  },
  card: {
    background: "rgba(20, 18, 38, 0.85)",
    backdropFilter: "blur(16px)",
    borderRadius: "16px",
    padding: "28px",
    width: "100%",
    maxWidth: "460px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    boxShadow: "0 8px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.07)",
  },
  row: {
    display: "flex",
    gap: "12px",
  },
  inputHalf: {
    ...base,
    flex: 1,
  },
  inputFull: {
    ...base,
  },
  textarea: {
    ...base,
    resize: "vertical",
    minHeight: "100px",
    fontFamily: "inherit",
  },
  button: {
    background: "linear-gradient(135deg, #f97316, #ea580c)",
    border: "none",
    borderRadius: "8px",
    color: "#fff",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: "600",
    letterSpacing: "0.5px",
    padding: "16px",
    width: "100%",
    transition: "background 0.2s, transform 0.1s",
    marginTop: "4px",
  },
};

export default EmailForm;