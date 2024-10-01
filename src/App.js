import React from "react";
import {CharacterProvider} from "./CharacterContext";
import ProfileCardList from './components/ProfileCardList';

//import CharacterModal from "./components/CharacterModal";
import './App.css';

function App() {
    return (
        <CharacterProvider>
            <div className="App">
                <h1>The Lord of the Rings Characters</h1>
                <ProfileCardList />
            </div>
        </CharacterProvider>
    );
}

export default App;