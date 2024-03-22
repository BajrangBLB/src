import React, { useState } from 'react';
import './card.css'
import image from '../src/PE.jpg'
function App() {
  // State variables
  const [open, setOpen] = useState(false);
  const [emailContent, setEmailContent] = useState('');
  const [spamWords, setSpamWords] = useState([]);

  // Function to handle opening of dialog
  const handleOpen = () => {
    setOpen(true);
  };

  // Function to handle closing of dialog
  const handleClose = () => {
    setOpen(false);
  };

  // Function to handle input change
  const handleInputChange = (event) => {
    setEmailContent(event.target.value);
  };

  // Function to check for spam words
  const checkSpamWords = () => {
    // List of spam words
    const spamWordList = ['free', 'prize', 'discount', 'urgent', 'click here'];
    // Split email content into words
    const words = emailContent.toLowerCase().split(/\W+/);
    // Filter spam words
    const detectedSpam = words.filter((word) => spamWordList.includes(word));
    // Update spam words state
    setSpamWords(detectedSpam);
  };

  return (
    <div>
    <div class="card-email">
  <img src={image}alt="Phishing Email Image"/>
  <div class="card-content-email">
    <div class="card-title-email">Phishing Email</div>
    <div class="card-text-email">
    
    
      <input
              className="dialog-input"
                type="text"
                placeholder="Enter email content"
                value={emailContent}
                onChange={handleInputChange}
              />
    </div>
   
  </div>

      <button onClick={handleOpen}>Open Dialog</button>
      </div>

      {/* Dialog box */}
      {open && (
        <div className="custom-dialog-overlay">
          <div className="custom-dialog">
            <h2>See the Spam Words</h2>
            <div className="custom-dialog-content">
              {/* Input field for email content */}
              
              {/* Button to check for spam words */}
              <button className="check-emailspam-btn" onClick={checkSpamWords}>
                Click to Check Spam Words
              </button>
              {/* Display spam words */}
              <p>Spam Words: {spamWords.join(', ')}</p>
      
             
            </div>
            <div className="custom-dialog-actions">
              {/* Button to close dialog */}
              <button className="close-btn-emailS" onClick={handleClose}>
                Close
              </button>
              <button> Details</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
