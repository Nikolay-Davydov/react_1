import React from "react";
import "./ProfileCard.css"

function ProfileCard({ name, photo, description, onCardClick }) {
    return (
        <div className="profile-card" onClick={onCardClick}>
            <img src={photo} alt={name} className="profile-photo"/>
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    );
}

export default ProfileCard;