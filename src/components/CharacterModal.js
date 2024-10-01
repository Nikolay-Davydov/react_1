import React from "react";
import "./CharacterModal.css"



function CharacterModal({ character, isOpen, onClose }) {
    if (!isOpen || !character) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <div className="modal-left">
                        <img src={character.photo} alt={character.name} className="modal-avatar"/>
                    </div>
                    <div className="modal-right">
                        <h2>{character.name}</h2>
                        <p>{character.description}</p>
                    </div>
                </div>
                <div className="modal-details">
                    <strong>Details: </strong>{character.details}
                </div>
                <button className="button" onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default CharacterModal;