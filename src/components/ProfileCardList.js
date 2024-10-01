import React, {useState} from 'react';
import { useCharacters } from "../CharacterContext";
import ProfileCard from "./ProfileCard";
import CharacterModal from "./CharacterModal";

const ProfileCardList = () => {
    const { characters } = useCharacters();
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCardClick = (character) => {
        setSelectedCharacter(character);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedCharacter(null);
    };

    return (
        <>
            <div className="profile-container">
                {characters.map((character) => (
                    <ProfileCard
                        key={character.name}
                        name={character.name}
                        photo={character.photo}
                        description={character.description}
                        onCardClick={() => handleCardClick(character)}
                    />
                ))}
            </div>

            <CharacterModal
                character={selectedCharacter}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </>
    );
};

export default ProfileCardList;