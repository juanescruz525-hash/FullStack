import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({ 
  name, 
  description, 
  imageUrl, 
  followers, 
  likes, 
  isVerified 
}) => {
  return (
    <div className="profile-card">
      <div className="profile-card-container">
        {/* Background Image */}
        <div className="profile-image-background">
          <img 
            src={imageUrl} 
            alt={name}
          />
        </div>

        {/* Content Overlay */}
        <div className="profile-content">
          {/* Profile Info with Blur Background */}
          <div className="profile-info-blur">
            <div className="profile-name">
              <h2>{name}</h2>
              {isVerified && (
                <span className="verified-badge">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                  </svg>
                </span>
              )}
            </div>
            <p className="profile-description">
              {description}
            </p>
          </div>

          {/* Stats with Blur Background */}
          <div className="profile-stats-blur">
            <div className="stat-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
              <span>{followers}</span>
            </div>
            <div className="stat-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <span>{likes}</span>
            </div>
            <button className="follow-button">
              Follow
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;