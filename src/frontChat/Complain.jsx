import { useContext, useState } from "react";
import Form2 from "./Form2";
import Mycontext from "../../Context";
import "./Complain.css";

export default function Complain() {
  const { back, complain, setComplain, alert2 } = useContext(Mycontext);
  const [showForm, setShowForm] = useState(false);

  function handlecomplain() {
    setComplain((prev) => !prev);
    setShowForm((prev) => !prev);
  }

  return (
    <div className="complain-page">

      {/* Hero */}
      <div className="complain-hero">
        <div className="complain-hero__left">
          <p className="complain-hero__eyebrow">Support portal</p>
          <h1 className="complain-hero__title">
            Complaint<br />Registration
          </h1>
          <p className="complain-hero__sub">
            Submit a complaint and track its resolution status. We aim to
            respond within 2 business days.
          </p>
        </div>
        <div className="complain-hero__art">
          <img src="complain.png" alt="Complaints" className="complain-hero__img" />
        </div>
      </div>

      {/* CTA */}
      <div className="complain-cta">
        <button className="complain-btn-register" onClick={handlecomplain} type="button">
          <span className="complain-btn-register__icon">{showForm ? "✕" : "+"}</span>
          {showForm ? "Cancel" : "Register complaint"}
        </button>
      </div>

      {/* Inline Form */}
      {complain && (
        <div className="complain-form-card">
          {alert2 && (
            <div className="complain-alert">
              <span className="complain-alert__icon">✓</span>
              Complaint registered successfully.
            </div>
          )}
          <Form2 />
        </div>
      )}

      {/* Cards Grid */}
      <div className="complain-cards-section">
        <p className="complain-section-label">Your complaints</p>

        {Object.keys(back ?? {}).length === 0 ? (
          <div className="complain-empty">
            <span className="complain-empty__icon">📭</span>
            <p>No complaints filed yet.</p>
          </div>
        ) : (
          <div className="complain-cards-grid">
            {Object.entries(back).map(([key, value]) => (
              <div className="complain-card" key={key}>
                <span className="complain-card__tag">Open</span>
                <p className="complain-card__subject">{value.subject}</p>
                <div className="complain-card__footer">
                  <span className="complain-card__date">{value.date ?? "—"}</span>
                  <span className="complain-card__status">
                    <span className="complain-card__dot" />
                    Registered
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}