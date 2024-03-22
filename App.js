import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import IdentifyThreat from '../src/IdentifyThreat'
import Malware from '../src/Malware'
import Phishing from '../src/Phishing'
import Login from './Login';
import Threats from '../src/Threats'
import Ransomware from './Ransomware';
import Models from './Models';
import ThreatHunting from './ThreatHunting';
import VulScanning from '../src/VulScanning'
import Card from '../src/Card';
import AllCards from '../src/AllCards'
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/Models" element={<Models />} />
        <Route exact path="/IdentifyThreat" element={<IdentifyThreat />} />
        <Route exact path="/Phishing" element={<Phishing />} />

        <Route exact path="/Malware" element={<Malware />} />
        
        <Route exact path="/Threats" element={<Threats />} />
        <Route exact path="/Ransomware" element={<Ransomware />} />
        <Route exact path="/ThreatHunting" element={<ThreatHunting />} />
        <Route exact path="/VulScanning" element={<VulScanning />} />
        <Route exact path="/AllCards" element={<AllCards />} />
        <Route exact path="/Card" element={<Card />} />
      </Routes>
    </Router>
  );
}

export default App;
