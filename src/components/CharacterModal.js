import React from "react";
import "./CharacterModal.css"


function CharacterModal({character, isOpen, onClose}) {
    if (!isOpen || !character) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <img src={character.photo} alt={character.name} className="modal-avatar"/>
                    <div className="modal-info">
                        <h2>{character.name}</h2>
                        <p>{character.description}</p>
                    </div>
                </div>
                <p className="modal-details"><strong>Details: </strong>{character.details}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default CharacterModal;