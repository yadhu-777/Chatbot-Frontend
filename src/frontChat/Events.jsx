import { useContext, useEffect, useState } from "react";
import Mycontext from "../../Context";
import Form from "./Form";


export default function Events() {
  const [eventData, setEventData] = useState([]);
  const [delEvent, setDelEvent] = useState(false);
  const { form, setForm, aadmin } = useContext(Mycontext);

  useEffect(() => {
    fetch("https://chatbot-backend-0k0q.onrender.com/getEvent", {
      credentials: "include",
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => setEventData(data.message));
  }, [form, delEvent]);

  function getDaysLeft(eventDate) {
    const today = new Date();
    const event = new Date(eventDate);
    const days = Math.ceil((event - today) / (1000 * 60 * 60 * 24));
    if (days < 0) return { label: "Finished", type: "finished" };
    if (days === 0) return { label: "Today", type: "today" };
    return { label: `${days} days left`, type: "upcoming" };
  }

  function handleEventDelet(id) {
    fetch("https://chatbot-backend-0k0q.onrender.com/deleteEvent", {
      credentials: "include",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .then(() => setDelEvent((prev) => !prev));
  }

  return (
    <div className="events-root">

      {/* Hero */}
      <div className="events-hero">
        <img
          src="https://res.cloudinary.com/dke8pn6li/image/upload/v1775212938/hbs3_lrivpf.png"
          alt="Events"
        />
        <div className="hero-overlay">
          <span className="hero-tag">Campus Life</span>
          <h1 className="hero-title">Events</h1>
        </div>
      </div>

      {/* Body */}
      <div className="events-body">

        {/* Top bar */}
        <div className="events-topbar">
          <span className="events-count">
            {eventData.length} event{eventData.length !== 1 ? "s" : ""}
          </span>
          {aadmin && (
            <button
              className="add-event-btn"
              onClick={() => setForm((prev) => !prev)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              Add Event
            </button>
          )}
        </div>

        {/* Grid */}
        <div className="events-grid">
          {eventData.length === 0 ? (
            <div className="empty-state">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <p>No events scheduled yet.</p>
            </div>
          ) : (
            eventData.map((data) => {
              const status = getDaysLeft(data.date);
              return (
                <div key={data._id} className="event-card">

                  {/* Image */}
                  <div className="card-img-wrap">
                    <img src={data.image} alt={data.name} />
                    <span className={`status-pill ${status.type}`}>
                      {status.label}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="card-body">
                    <p className="card-date">
                      {new Date(data.date).toLocaleDateString("en-US", {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                    <h2 className="card-title">{data.name}</h2>
                    <p className="card-details">{data.details}</p>
                  </div>

                  {/* Footer (admin only) */}
                  {aadmin && (
                    <div className="card-footer">
                      <span className="card-footer-id">#{data._id?.slice(-6)}</span>
                      <button
                        className="delete-btn"
                        onClick={() => handleEventDelet(data._id)}
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                          <polyline points="3 6 5 6 21 6" />
                          <path d="M19 6l-1 14H6L5 6" />
                          <path d="M10 11v6M14 11v6" />
                        </svg>
                        Delete
                      </button>
                    </div>
                  )}

                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Form overlay */}
      {form && (
        <div className="form-overlay">
          <Form />
        </div>
      )}

    </div>
  );
}