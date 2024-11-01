import React from "react";
import { BsBookFill } from "react-icons/bs";
import './None.css';
import Header from '../Header/Header'; // Правильний шлях до Header
import Footer from '../Footer/Footer'; // Правильний шлях до Footer

const Note = () => {
  const [entries, setEntries] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");
  const [modalVisible, setModalVisible] = React.useState(false);

  const handleAddNote = () => {
    if (inputValue) {
      setEntries([...entries, inputValue]);
      setInputValue("");
      setModalVisible(false);
    }
  };

  return (
    <div className="text-input-page">
      
      <div className="button-container">
        <button className="add-button" onClick={() => setModalVisible(true)}>
          +
        </button>
        <span className="button-label">Add new note</span>
      </div>

      {modalVisible && (
        <div className="input-modal">
          <textarea
            className="text-input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={handleAddNote}>Create</button>
        </div>
      )}

      <div className="entries">
        {entries.map((entry, index) => (
          <div key={index} className="entry">
            <BsBookFill style={{ marginRight: '10px', color: 'black' }} />
            {entry}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Note;
