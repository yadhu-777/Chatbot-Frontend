import { useContext, useEffect, useState, useRef } from 'react';
import { toast } from "react-toastify";
import PlacementFrom from './PlacementForm';
import Mycontext from '../../Context';

export default function Highlight() {
  const [plData, setPlData] = useState([]);
  const [selectedImg, setSelectedImg] = useState(null);
  const [selectedName, setSelectedName] = useState('');
  const [isPaused, setIsPaused] = useState(false);

  const { showpl, setShowpl, recPl, setRcpl, aadmin } = useContext(Mycontext);

  useEffect(() => {
    fetch("https://chatbot-backend-0k0q.onrender.com/getHighlight", {
      credentials: "include",
      method: "POST",
      headers: { "Content-Type": "application/json" }
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Error during fetch") {
          toast(data.message, { position: "top-center", autoClose: 1000, theme: "dark" });
        } else {
          setPlData(data.message);
        }
      })
      .catch((err) => console.log(err));
  }, [recPl]);

  function handleDelete(id) {
    fetch("https://chatbot-backend-0k0q.onrender.com/highlightDelete", {
      credentials: "include",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id })
    })
      .then((res) => res.json())
      .then((data) => {
        setRcpl(prev => !prev);
        toast(data.message, { position: "top-center", autoClose: 1000, theme: "dark" });
      })
      .catch((err) => toast(err.message, { position: "top-center", autoClose: 1000, theme: "dark" }));
  }

  // Split images into 3 rows for the marquee strips
  const row1 = plData.filter((_, i) => i % 3 === 0);
  const row2 = plData.filter((_, i) => i % 3 === 1);
  const row3 = plData.filter((_, i) => i % 3 === 2);

  // Heights for Pinterest-style masonry feel within each strip
  const heights = [180, 240, 200, 260, 180, 220, 250, 190, 230, 210];

  return (
    <>
   

      <div className="hl-root">
        <div className="hl-orb hl-orb-1" />
        <div className="hl-orb hl-orb-2" />

        {/* Header */}
        <div className="hl-header">
          <div className="hl-eyebrow">
            <span className="hl-eyebrow-dot" />
            College Memories
          </div>
        
          <p className="hl-subtitle">{plData.length} moments captured</p>

          {aadmin && (
            <button className="hl-add-btn" onClick={() => setShowpl(prev => !prev)}>
              + Add Image
            </button>
          )}
        </div>

        {showpl && <PlacementFrom />}

        {plData.length === 0 ? (
          <div className="hl-empty">
            <div className="hl-empty-icon">🖼</div>
            <p>No highlights yet. Add some memories!</p>
          </div>
        ) : (
          <div
            className="hl-strips"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Row 1 — left to right */}
            <MarqueeRow
              items={row1.length ? row1 : plData.slice(0, Math.ceil(plData.length / 3))}
              heights={heights}
              width={220}
              reverse={false}
              slow={false}
              paused={isPaused}
              aadmin={aadmin}
              onOpen={(img, name) => { setSelectedImg(img); setSelectedName(name); }}
              onDelete={handleDelete}
            />

            {/* Row 2 — right to left */}
            <MarqueeRow
              items={row2.length ? row2 : plData.slice(Math.ceil(plData.length / 3), Math.ceil(2 * plData.length / 3))}
              heights={heights}
              width={260}
              reverse={true}
              slow={false}
              paused={isPaused}
              aadmin={aadmin}
              onOpen={(img, name) => { setSelectedImg(img); setSelectedName(name); }}
              onDelete={handleDelete}
            />

            {/* Row 3 — left to right slow */}
            <MarqueeRow
              items={row3.length ? row3 : plData.slice(Math.ceil(2 * plData.length / 3))}
              heights={heights}
              width={200}
              reverse={false}
              slow={true}
              paused={isPaused}
              aadmin={aadmin}
              onOpen={(img, name) => { setSelectedImg(img); setSelectedName(name); }}
              onDelete={handleDelete}
            />
          </div>
        )}

        {/* Lightbox */}
        {selectedImg && (
          <div className="hl-modal" onClick={() => setSelectedImg(null)}>
            <div className="hl-modal-content" onClick={e => e.stopPropagation()}>
              <button className="hl-modal-close" onClick={() => setSelectedImg(null)}>✕</button>
              <img src={selectedImg} alt={selectedName} />
              {selectedName && <div className="hl-modal-name">{selectedName}</div>}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

/* ── Marquee row component ── */
function MarqueeRow({ items, heights, width, reverse, slow, paused, aadmin, onOpen, onDelete }) {
  if (!items || items.length === 0) return null;

  // Duplicate items to create seamless loop
  const doubled = [...items, ...items, ...items];

  const trackClass = [
    'hl-track',
    reverse ? 'reverse' : '',
    slow ? 'slow' : '',
    paused ? 'paused' : ''
  ].filter(Boolean).join(' ');

  return (
    <div className="hl-track-wrap">
      <div className={trackClass}>
        {doubled.map((data, i) => {
          const h = 320;
const w = 320;

          return (
            <div
              key={`${data._id}-${i}`}
              className="hl-card"
              style={{ width: `${w}px`, height: `${h}px` }}
              onClick={() => onOpen(data.image, data.name || 'College Memory')}
            >
              <img src={data.image} alt={data.name || ''} loading="lazy" />
              <div className="hl-card-overlay">
                <div className="hl-card-name">{data.name || 'College Memory'}</div>
                {aadmin && (
                  <button
                    className="hl-delete-btn"
                    onClick={e => { e.stopPropagation(); onDelete(data._id); }}
                  >
                    🗑 Delete
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
