import React, {useState} from "react";
import ProfileCard from "./components/ProfileCard";
import CharacterModal from "./components/CharacterModal";
import './App.css';


function App() {
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const characters = [
        {
            name: 'Frodo Baggins',
            photo: 'https://i.imgur.com/XcviNsj.jpeg',
            description: 'Hobbit from the Shire, bearer on the One Ring.',
            details: 'Frodo is one of the most important characters in The Lord of the Rings. He is the bearer of the One Ring and must destroy it in the fires of Mount Doom.'
        },
        {
            name: 'Aragorn',
            photo: 'https://i.imgur.com/UcJQXYg.jpeg',
            description: 'Heir of Isildur and the King of Gondor.',
            details: 'Aragorn is the last descendant of the kings of Gondor and plays a vital role in leading the fight against Sauron. He eventually claims the throne and restores peace to Middle-earth.'
        },
        {
            name: 'Gandalf',
            photo: 'https://i.imgur.com/ER7H7Hy.jpeg',
            description: 'A powerful wizard and leader of the Fellowship of the Ring.',
            details: 'Gandalf, known as Gandalf the Grey and later Gandalf the White, is a wizard and a key leader in the fight against Sauron. He is wise, powerful, and plays a crucial role in the Fellowship of the Ring.'
        },
        {
            name: 'Legolas',
            photo: 'https://i.imgur.com/vV5Lsa0.jpeg',
            description: 'Elven prince of the Woodland Realm, master archer.',
            details: 'Legolas is known for his agility, archery skills, and loyalty. He forms a close friendship with Gimli, despite their races historically being in conflict, and is a key member of the Fellowship.'
        },
        {
            name: 'Gimli',
            photo: 'https://i.imgur.com/LwcRPn0b.jpg',
            description: 'Dwarf warrior and member of the Fellowship of the Ring.',
            details: 'Gimli is a brave and strong fighter, known for his axe-wielding prowess. He forms a strong bond with Legolas, showing that old rivalries between Elves and Dwarves can be overcome.'
        },
    ];

    const handleCardClick = (character) => {
        setSelectedCharacter(character);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedCharacter(null);
    }

    return (
        <div className="App">
            <h1>The Lord of the Rings Characters</h1>
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
        </div>
    );
}

export default App;
