import React, {useState} from "react";
import "./ProfileCard.css";

function ProfileCard({ name, photo, description }) {
    const [isDetailed, setIsDetailed] = useState(false);
    const [desc, setDesc] = useState(description);

    const detailedDescriptions = {
        'Frodo Baggins': 'Frodo is a hobbit of the Shire, entrusted with the One Ring. He embarks on a perilous journey to destroy it in the fires of Mount Doom.',
        'Aragorn': 'Aragorn, son of Arathorn, is a skilled ranger and the heir to the throne of Gondor. He plays a crucial role in the War of the Ring.',
        'Gandalf': 'Gandalf is a Maia spirit who serves as a guide and leader for the Free Peoples of Middle-earth. He is wise and powerful.',
        'Legolas': 'Legolas is an elven prince of the Woodland Realm, known for his agility and unmatched archery skills. He is a loyal member of the Fellowship.',
        'Gimli': 'Gimli is a dwarf warrior, known for his strength and bravery. He represents the Dwarves in the Fellowship and forms a strong friendship with Legolas.',
    };

    const handleChangeDescription = () => {
        if(isDetailed){
            setDesc(description);
        } else {
            setDesc(detailedDescriptions[name]);
        }
        setIsDetailed(!isDetailed);
    };

    return (
        <div className="profile-card">
            <img src={photo} alt={name} className="profile-photo"/>
            <h2>{name}</h2>
            <p>{desc}</p>
            <button onClick={handleChangeDescription}>
                {isDetailed ? 'Hide description' : 'Show a detailed description'}
            </button>
        </div>
    );
}

export default ProfileCard;
