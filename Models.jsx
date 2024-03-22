import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'; // Import Link component
import image1 from '../src/loginimage.jpg';
import image2 from '../src/PE.jpg';
import image3 from '../src/malware.webp';
import image4 from '../src/T.jpg';
import image5 from '../src/ransomware.jpg';
import image6 from '../src/TH.jpg';
import image7 from '../src/vulscan.webp';
import './style.css';

const routes = [
  "/IdentifyThreat",
  "/Phishing",
  "/Malware",
  "/Threats",
  "/Ransomware",
  "/ThreatHunting",
  "/VulScanning"
];

const titles = [
  "Identifying Threats",
  "Phishing",
  "Malware",
  "Threats",
  "Ransomware Attack",
  "Threat Hunting",
  "Vulnerability Scanning"
];

const descriptions = [
  "Identifying threats involves recognizing potential risks or dangers to a system or network.",
  "Phishing emails are fraudulent emails sent by attackers to deceive individuals into revealing sensitive information.",
  "Malware is malicious software designed to disrupt, damage, or gain unauthorized access to a computer system.",
  "Threats refer to any potential dangers or risks to a system's security or integrity.",
  "A ransomware attack is a type of malware attack that encrypts a victim's files and demands payment for their release.",
  "Threat hunting involves actively searching for and identifying potential security threats or vulnerabilities.",
  "Vulnerability scanning is the process of identifying weaknesses or vulnerabilities in a system or network."
];

function KitchenSinkExample() {
  const imageStyle = { width: '320px', height: '30vh',margin:'8%' };

  return (
    <div>
      <h1 style={{ textAlign: 'center',color:'white' }}>AI Tools</h1>
      <div className="card-container">
        {titles.map((title, index) => (
          <Card key={index} className="custom-card" style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <Card.Img variant="top" src={getImageSource(index)} style={imageStyle} />
            <Card.Body>
              <Card.Title style={{margin:'5%',fontSize:'18px'}}>{title}</Card.Title>
              <Card.Text style={{width:'100%',height:'10vh',margin:'1%'}}>{descriptions[index]}</Card.Text>
            </Card.Body>
            <Card.Body>
              {/* Modify Link to navigate to the desired page */}
              <Link to={routes[index]} className="custom-link custom-button">View Details</Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

function getImageSource(index) {
  switch (index) {
    case 0:
      return image1;
    case 1:
      return image2;
    case 2:
      return image3;
    case 3:
      return image4;
    case 4:
      return image5;
    case 5:
      return image6;
    case 6:
      return image7;
    default:
      return null;
  }
}

export default KitchenSinkExample;
