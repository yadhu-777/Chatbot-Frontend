import { useState } from "react";

const faqs = [
  {
    category: "Course Eligibility",
    icon: "🎓",
    color: "#e8b84b",
    colorDim: "rgba(232,184,75,0.12)",
    questions: [
      {
        q: "What is the eligibility for BCA (Bachelor of Computer Applications)?",
        a: "Candidates must have passed 10+2 (or equivalent) from a recognized board with Mathematics or Computer Science as a subject. A minimum of 45–50% aggregate marks is generally required (relaxation for reserved categories). Some colleges may require an entrance test.",
      },
      {
        q: "What are the eligibility criteria for BBA?",
        a: "Students who have completed 10+2 in any stream (Science, Commerce, or Arts) with at least 45–50% aggregate marks are eligible for BBA. No specific subject requirement, but proficiency in English and basic Mathematics is preferred.",
      },
      {
        q: "Who can apply for BCom (Bachelor of Commerce)?",
        a: "Candidates with 10+2 in Commerce or any stream with at least 45% marks are eligible. Having Mathematics or Accounts in Class 12 is an advantage. Entrance exams or merit-based admissions may apply depending on the institution.",
      },
      {
        q: "What are the requirements for BSc admission?",
        a: "For BSc, students must have completed 10+2 with Physics, Chemistry, and Mathematics/Biology from a recognized board. A minimum of 50% aggregate marks is required. The specific stream (PCM or PCB) depends on the specialization chosen.",
      },
    ],
  },
  {
    category: "Course Duration",
    icon: "📅",
    color: "#3ecfb2",
    colorDim: "rgba(62,207,178,0.1)",
    questions: [
      {
        q: "What is the duration of the BCA program?",
        a: "BCA is a 3-year undergraduate program divided into 6 semesters. Each semester is approximately 6 months long. The curriculum includes core computer science subjects, practical labs, and a final-year project.",
      },
      {
        q: "How long is the BBA course?",
        a: "BBA is a 3-year full-time degree program consisting of 6 semesters. It covers business management, marketing, finance, and entrepreneurship. Some institutions also offer accelerated or part-time BBA programs.",
      },
      {
        q: "What is the duration of BSc?",
        a: "BSc is typically a 3-year undergraduate program (6 semesters). Some universities offer 4-year BSc (Hons) programs. Post-graduate options like MSc can be pursued for an additional 2 years after completing BSc.",
      },
      {
        q: "How long does it take to complete BCom?",
        a: "BCom is a 3-year degree program spread across 6 semesters. Specialized programs like BCom (Hons) or BCom with CA/CMA are also 3 years but with a more rigorous curriculum. Many students pursue CA or MBA after BCom.",
      },
    ],
  },
  {
    category: "Fees & Scholarships",
    icon: "💰",
    color: "#f06292",
    colorDim: "rgba(240,98,146,0.1)",
    questions: [
      {
        q: "What is the approximate fee structure for these courses?",
        a: "Fees vary by institution. Government colleges charge ₹5,000–₹30,000 per year, while private colleges range from ₹40,000–₹2,00,000 per year. Deemed universities or autonomous institutions may charge higher fees. Contact the admissions office for the exact fee breakup.",
      },
      {
        q: "Are scholarships available for students?",
        a: "Yes! Scholarships are available through the National Scholarship Portal (NSP), state government schemes, and institutional merit-based scholarships. SC/ST/OBC students can avail post-matric scholarships. Merit scholarships are given to top-performing students in every semester.",
      },
      {
        q: "Is there an education loan facility?",
        a: "Students can avail education loans from banks like SBI, Bank of Baroda, and HDFC under the Central Scheme for Interest Subsidy (CSIS). Loans up to ₹10 lakhs are available for domestic studies with a moratorium period of 1 year after course completion.",
      },
    ],
  },
  {
    category: "Admission Process",
    icon: "📋",
    color: "#7c6af7",
    colorDim: "rgba(124,106,247,0.1)",
    questions: [
      {
        q: "What documents are required for admission?",
        a: "You need: 10th and 12th marksheets & passing certificates, transfer certificate (TC), migration certificate (if applicable), caste/category certificate (if applicable), income certificate, passport-size photographs, Aadhaar card, and domicile certificate. Original documents are required at the time of admission.",
      },
      {
        q: "Is there an entrance exam for admission?",
        a: "Admission can be merit-based (direct 12th marks) or entrance-based. Common entrance exams include CUET (Central University Common Entrance Test), state-level exams, or institution-specific tests. Check the official admission notice for the exact process.",
      },
      {
        q: "When does the admission process start?",
        a: "Admissions typically start between May and July, after 12th board results are declared. Application forms are usually available online. The academic session begins in July–August. Late admissions may be offered based on seat availability.",
      },
    ],
  },
  {
    category: "Career & Placements",
    icon: "🚀",
    color: "#4ade80",
    colorDim: "rgba(74,222,128,0.1)",
    questions: [
      {
        q: "What career options are available after BCA?",
        a: "BCA graduates can pursue careers as Software Developer, Web Developer, Data Analyst, System Administrator, or Database Manager. Many opt for MCA or MBA (IT) for higher studies. Top recruiters include TCS, Infosys, Wipro, and startups.",
      },
      {
        q: "What jobs can I get after completing BBA?",
        a: "BBA graduates can work as Business Analyst, Marketing Executive, HR Manager, Sales Manager, or Entrepreneur. MBA is a popular higher education choice after BBA, opening doors to senior management roles. Average starting salary ranges from ₹2–6 LPA.",
      },
      {
        q: "What is the placement rate of the college?",
        a: "Our placement cell actively connects students with 100+ companies. The average placement rate is over 85% for final-year students. Top packages range from ₹4–12 LPA depending on the course and company. On-campus drives are held every year from August onwards.",
      },
    ],
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [search, setSearch] = useState("");

  function toggle(key) {
    setOpenIndex(openIndex === key ? null : key);
  }

  const filtered = faqs
    .map((cat) => ({
      ...cat,
      questions: cat.questions.filter(
        (faq) =>
          faq.q.toLowerCase().includes(search.toLowerCase()) ||
          faq.a.toLowerCase().includes(search.toLowerCase()),
      ),
    }))
    .filter(
      (cat) =>
        cat.questions.length > 0 &&
        (activeCategory === null || activeCategory === cat.category),
    );

  return (
    <div className="faq-root">
      {/* Background grid */}
      <div className="faq-bg-grid" />

      {/* Orbs */}
      <div className="faq-orb faq-orb-1" />
      <div className="faq-orb faq-orb-2" />

      <div className="faq-container">
        {/* Header */}
        <div className="faq-header">
          <div className="faq-badge">
            <span className="faq-badge-dot" />
            Student Help Center
          </div>
          <h1 className="faq-title">
            Frequently Asked <span>Questions</span>
          </h1>
          <p className="faq-subtitle">
            Everything you need to know about courses, eligibility, duration,
            fees, and placements — answered clearly.
          </p>

          {/* Search */}
          <div className="faq-search-wrap">
            <span className="faq-search-icon">🔍</span>
            <input
              className="faq-search"
              type="text"
              placeholder="Search questions…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <button className="faq-clear-btn" onClick={() => setSearch("")}>
                ✕
              </button>
            )}
          </div>

          {/* Category pills */}
          <div className="faq-pills">
            <button
              className={`faq-pill ${activeCategory === null ? "active" : ""}`}
              onClick={() => setActiveCategory(null)}
            >
              All Topics
            </button>
            {faqs.map((cat) => (
              <button
                key={cat.category}
                className={`faq-pill ${
                  activeCategory === cat.category ? "active" : ""
                }`}
                style={
                  activeCategory === cat.category
                    ? {
                        borderColor: cat.color,
                        color: cat.color,
                        background: cat.colorDim,
                      }
                    : {}
                }
                onClick={() =>
                  setActiveCategory(
                    activeCategory === cat.category ? null : cat.category,
                  )
                }
              >
                {cat.icon} {cat.category}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ sections */}
        {filtered.length === 0 ? (
          <div className="faq-empty">
            <div className="faq-empty-icon">🔎</div>
            <p>No results found for &ldquo;{search}&rdquo;</p>
            <button className="faq-reset-btn" onClick={() => setSearch("")}>
              Clear search
            </button>
          </div>
        ) : (
          filtered.map((cat) => (
            <div key={cat.category} className="faq-section">
              <div
                className="faq-section-header"
                style={{ borderLeftColor: cat.color }}
              >
                <span className="faq-section-icon">{cat.icon}</span>
                <h2 className="faq-section-title" style={{ color: cat.color }}>
                  {cat.category}
                </h2>
                <span
                  className="faq-count"
                  style={{ color: cat.color, background: cat.colorDim }}
                >
                  {cat.questions.length} Q&amp;A
                </span>
              </div>

              <div className="faq-list">
                {cat.questions.map((faq, qi) => {
                  const key = `${cat.category}-${qi}`;
                  const isOpen = openIndex === key;
                  return (
                    <div
                      key={key}
                      className={`faq-item ${isOpen ? "faq-item--open" : ""}`}
                      style={isOpen ? { borderColor: cat.color } : {}}
                    >
                      <button
                        className="faq-question"
                        onClick={() => toggle(key)}
                        aria-expanded={isOpen}
                      >
                        <span className="faq-q-text">{faq.q}</span>
                        <span
                          className="faq-chevron"
                          style={
                            isOpen
                              ? {
                                  color: cat.color,
                                  transform: "rotate(180deg)",
                                }
                              : {}
                          }
                        >
                          ▾
                        </span>
                      </button>

                      <div
                        className={`faq-answer-wrap ${isOpen ? "faq-answer-wrap--open" : ""}`}
                      >
                        <div
                          className="faq-answer"
                          style={{ borderLeftColor: cat.color }}
                        >
                          {faq.a}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        )}

        {/* Footer CTA */}
        <div className="faq-cta">
          <p className="faq-cta-text">Still have questions?</p>
          <p className="faq-cta-sub">For more information,feel free to contact our office.</p>
        
          <button
            className="faq-cta-btn"
            
           onClick="window.location.href='tel:+919876543210'">
           Contact us
          </button>
          <a href="tel:+919876543210" className="faq-cta-btn">
  Contact Us
</a>
        </div>
      </div>
    </div>
  );
}
