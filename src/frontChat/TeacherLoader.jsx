
const TeacherLoader = () => {
  return (
    <div className="loader-container">
      <div className="classroom-scene">
        
        {/* 1. The Teacher Character */}
        <div className="teacher-character">
          <div className="avatar">
            {/* A simple cartoon teacher avatar - using emoji for simplicity, 
               but easily replaced with an SVG or image */}
            <span className="teacher-face">👨‍🏫</span>
          </div>
          {/* A stick or pointer that moves */}
          <div className="pointer-stick"></div>
        </div>

        {/* 2. The Chalkboard */}
        <div className="chalkboard">
          <div className="lesson-writing">A + B = C</div>
          <div className="lesson-writing lesson-two">Learn!</div>
          <div className="lightbulb">💡</div>
        </div>
        
      </div>
      <p className="loading-text">The professor is preparing...</p>
    </div>
  );
};

export default TeacherLoader;