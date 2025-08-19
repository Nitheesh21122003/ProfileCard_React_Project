import React from "react";
import "./App.css";
import ProfileCard from "./TempCard.js";  // ✅ Corrected import

function App() {
  return (
    <div className="App">
      <h1>My Team</h1>
      <div className="card-container">
        <ProfileCard
          name="Nitheesh S.A"
          title="Software Engineer"
          avatarUrl="https://cdn.pixabay.com/photo/2023/04/21/15/42/portrait-7942151_1280.jpg"
          bio="Passionate about AI & Web development."
          resume="/resume.pdf"   // ✅ Changed from profileLink → resume
          github="https://github.com/yourusername"
          linkedin="https://linkedin.com/in/yourusername"
          twitter="https://twitter.com/yourusername"
        />

        <ProfileCard
          name="Sarat"
          title="Frontend Developer"
          avatarUrl="https://thumbs.dreamstime.com/z/portrait-attractive-cheerful-young-man-smiling-happy-face-human-expressions-emotions-model-beautiful-smile-blue-eyes-147751681.jpg"
          bio="Loves React, Tailwind, and UI design."
          resume="/resume.pdf"   // ✅ Changed
          github="https://github.com/johndoe"
          linkedin="https://linkedin.com/in/johndoe"
          twitter="https://twitter.com/johndoe"
        />

        <ProfileCard
          name="Anand Kumar"
          title="Data Scientist"
          avatarUrl="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
          bio="Exploring deep learning and AI solutions."
          resume="/resume.pdf"   // ✅ Changed
          github="https://github.com/janesmith"
          linkedin="https://linkedin.com/in/janesmith"
          twitter="https://twitter.com/janesmith"
        />
      </div>
    </div>
  );
}

export default App;
