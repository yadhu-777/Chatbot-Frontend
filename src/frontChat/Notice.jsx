import { useState, useRef, useEffect, useContext } from "react";
import Mycontext from "../../Context";
import imageCompression from "browser-image-compression";
import NoticeForm from "./NoticeForm";
import { toast } from "react-toastify";

const initialSlots = [
  { id: 1, image: null, rotation: -3, pinColor: "#e74c3c" },
  { id: 2, image: null, rotation: 2,  pinColor: "#f39c12" },
  { id: 3, image: null, rotation: -1, pinColor: "#2ecc71" },
  { id: 4, image: null, rotation: 3,  pinColor: "#e74c3c" },
  { id: 5, image: null, rotation: -2, pinColor: "#3498db" },
  { id: 6, image: null, rotation: 1,  pinColor: "#9b59b6" },
];

const placeholderLabels = [
  "Snap #1", "Snap #2", "Snap #3",
  "Snap #4", "Snap #5", "Snap #6",
];

export default function NoticeBoard() {
  const { admin, notice, SetNotice } = useContext(Mycontext);

  const [slots, setSlots] = useState([]);
  const [dragging, setDragging] = useState(null);
  const [lightbox, setLightbox] = useState(null); // NEW
  const fileInputRef = useRef(null);
  const activeSlotRef = useRef(null);

  useEffect(() => {
    fetch("https://chatbot-backend-0k0q.onrender.com/getNotice", {
      method: "POST",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSlots(data.message);
      });
  }, [notice]);

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(e.currentTarget.dataset.id);
  };

  const handleDrop = (e, slotId) => {
    e.preventDefault();
    setDragging(null);
    const file = e.dataTransfer.files[0];
    if (!file || !file.type.startsWith("image/")) return;
    const url = URL.createObjectURL(file);
    setSlots((prev) =>
      prev.map((s) => (s.id === slotId ? { ...s, image: url } : s))
    );
  };

  async function handleDelete(id) {
    fetch("https://chatbot-backend-0k0q.onrender.com/delNotice", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .then((data) => {
        toast(data.message, {
          position: "top-center",
          autoClose: 1000,
          theme: "dark",
        });
      });
  }

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className="board-room">
      {notice && <NoticeForm />}

      <header className="board-header">
        <span className="board-tag">DIGITAL</span>
        <h1 className="board-title">Notice Board</h1>
        <p className="board-subtitle">Click a slot or drag & drop to pin your photos</p>
      </header>

      <div className="corkboard">
        <div className="cork-texture" />
        <div className="board-frame top" />
        <div className="board-frame bottom" />
        <div className="board-frame left" />
        <div className="board-frame right" />
        <div className="corner corner-tl" />
        <div className="corner corner-tr" />
        <div className="corner corner-bl" />
        <div className="corner corner-br" />

        <div className="photo-grid">
          {slots &&
            slots.map((slot, i) => (
              <div
                key={slot.id}
                className={`photo-slot ${dragging == slot.id ? "drag-over" : ""} ${slot.image ? "has-image" : ""}`}
                style={{ "--rot": `${slot.rotation}deg` }}
                data-id={slot.id}
                onDragOver={handleDragOver}
                onDragLeave={() => setDragging(null)}
                onDrop={(e) => handleDrop(e, slot.id)}
              >
                {/* Pin */}
                <div className="pin" style={{ "--pin-color": slot.pinColor }}>
                  <div className="pin-head" />
                  <div className="pin-needle" />
                </div>

                {/* Photo paper */}
                <div className="photo-paper">
                  {slot.image ? (
                    <img
                      src={slot.image}
                      alt={`Notice ${slot.id}`}
                      className="photo-img"
                      style={{ cursor: "zoom-in" }}
                      onClick={() => setLightbox(slot.image)}  // NEW
                    />
                  ) : ""}
                </div>

                {i % 3 === 0 && <div className="tape tape-top" />}
                {i % 3 === 1 && (
                  <>
                    <div className="tape tape-left" />
                    <div className="tape tape-right" />
                  </>
                )}
                {admin && (
                  <button
                    onClick={() => handleDelete(slot.image)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                )}
              </div>
            ))}
        </div>
      </div>

      <footer className="board-footer">
        <span>📌 {slots && slots?.filter((s) => s.image).length} / 6 photos pinned</span>
        {admin && (
          <button
            onClick={() =>
              slots.length >= 6
                ? toast("6 post is the Limit", {
                    position: "top-center",
                    autoClose: 1000,
                    theme: "dark",
                  })
                : SetNotice((prev) => !prev)
            }
            className="btn btn-danger"
            style={{ marginLeft: "1rem" }}
          >
            Add
          </button>
        )}
      </footer>

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.88)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            cursor: "zoom-out",
          }}
        >
          <img
            src={lightbox}
            alt="Full view"
            style={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              objectFit: "contain",
              borderRadius: "8px",
              boxShadow: "0 8px 40px rgba(0,0,0,0.6)",
            }}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={() => setLightbox(null)}
            style={{
              position: "fixed",
              top: "1rem",
              right: "1.5rem",
              background: "transparent",
              border: "none",
              color: "#fff",
              fontSize: "2.5rem",
              cursor: "pointer",
              lineHeight: 1,
              zIndex: 10000,
            }}
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
}