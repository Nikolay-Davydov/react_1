
import React from "react";
import ProfileCard from "./components/ProfileCard";
import './App.css';


function App() {
    const profiles = [
        {
            name: 'Frodo Baggins',
            photo: 'https://i.imgur.com/XcviNsj.jpeg',
            description: 'Hobbit from the Shire, bearer on the One Ring.'
        },
        {
            name: 'Aragorn',
            photo: 'https://i.imgur.com/UcJQXYg.jpeg',
            description: 'Heir of Isildur and the King of Gondor.'
        },
        {
            name: 'Gandalf',
            photo: 'https://i.imgur.com/ER7H7Hy.jpeg',
            description: 'A powerful wizard and leader of the Fellowship of the Ring.'
        },
        {
            name: 'Legolas',
            photo: 'https://i.imgur.com/vV5Lsa0.jpeg',
            description: 'Elven prince of the Woodland Realm, master archer.',
        },
        {
            name: 'Gimli',
            photo: 'https://i.imgur.com/LwcRPn0b.jpg',
            description: 'Dwarf warrior and member of the Fellowship of the Ring.',
        },
    ];
    return (
        <div className="App">
            <h1>The Lord of the Rings Characters</h1>
            <div className="profile-container">
                {profiles.map((pprofile, index) => (
                    <ProfileCard
                    key={index}
                    name={pprofile.name}
                    photo={pprofile.photo}
                    description={pprofile.description}
                    />
                ))}
            </div>
        </div>
    )
}

export default App;
