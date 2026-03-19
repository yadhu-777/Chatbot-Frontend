import { useEffect, useState } from "react";

export default function News() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   fetch("https://chatbot-backend-0k0q.onrender.com/news")
  .then((res) => res.text())
  .then((str) => {
    const parser = new DOMParser();
    const xml = parser.parseFromString(str, "text/xml");
    const items = xml.querySelectorAll("item");

      const newsData = Array.from(items).map((item) => ({
        title: item.querySelector("title").textContent,
        link: item.querySelector("link").textContent,
        pubDate: item.querySelector("pubDate")?.textContent, // optional
      }));

    setNews(newsData);
    setLoading(false);
  })
  .catch((err) => {
    console.error("Error fetching news:", err);
  });
  }, []);

  return (
  <div className="news">
  <h2 className="news-title">📰 Campus News</h2>

  {loading ? (
    <p className="loading">Loading latest news...</p>
  ) : (
    <div className="news-grid">
      {news.map((n, i) => (
        <div className="news-card" key={i}>
          
          <h3 className="news-heading">{n.title}</h3>

          {n.pubDate && (
            <p className="news-date">
              🕒 {new Date(n.pubDate).toLocaleString()}
            </p>
          )}

          <a
            href={n.link}
            target="_blank"
            rel="noreferrer"
            className="read-btn"
          >
            Read More →
          </a>

        </div>
      ))}
    </div>
  )}
</div>
  );
}

