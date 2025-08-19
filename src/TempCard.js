
import "./ProfileCard.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function ProfileCard({ name, title, avatarUrl, bio, resume, github, linkedin, twitter }) {
  return (
    <div className="profile-card">
      <img src={avatarUrl} alt={name} className="avatar" />
      <h2>{name}</h2>
      <h4>{title}</h4>
      <p>{bio}</p>

      {/* Resume Download Button */}
      <a href={resume} download className="download-btn">
        Download Resume
      </a>

      {/* Social Icons */}
      <div className="social-icons">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        )}
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        )}
        {twitter && (
          <a href={twitter} target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        )}
      </div>
    </div>
  );
}

export default ProfileCard;
