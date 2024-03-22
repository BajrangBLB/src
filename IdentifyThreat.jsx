import React from 'react';
import './identify.css'; // Import CSS file for styling
import image from '../src/loginimage.jpg'; // Import image

const DetailPage = () => {
  return (
    <div className="detail-page" style={{ backgroundColor: '#f0f0f0' }}>
      <section className="section">
        <h2 className="section-heading">Identifying Threats</h2>
        <img src={image} alt="Identifying Threats" className="section-image" />
        <div className="section-text">
          <p>
            Define the specific threats you are concerned about, such as phishing, malware, insider threats, etc. Also, list the available data sources, such as network traffic logs, user activity logs, email data, etc.
          </p>
          <p>
            Explain how machine learning can be used to detect anomalies and potential threats. Mention examples of unusual traffic patterns, suspicious user behavior, and system anomalies.
          </p>
          <ul>
            <li>Unusual traffic patterns: Spikes in network activity, unauthorized access attempts, or data transfers at odd hours.</li>
            <li>Suspicious user behavior: Sudden access to sensitive files, login attempts from unusual locations, or using unauthorized devices.</li>
            <li>System anomalies: Frequent errors, unexpected crashes, or changes in resource usage.</li>
          </ul>
         
         
            
        </div>
      </section>

      <section className="section">
        <h2 className="section-heading">Define Our Needs</h2>
        <div className="section-text">
          <p>
            What specific threats are you most concerned about? (Phishing, malware, insider threats, etc.)
          </p>
          <p>
            What data sources do you have available? (Network traffic logs, user activity logs, email data, etc.)
          </p>
          <p>
            We think of ML as a guard dog constantly monitoring our network and systems. It continuously analyzes data streams like network traffic, user actions, and system logs. We have to train them to recognize "normal" patterns in this data. When significant deviations from these normal patterns occur, they are flagged as anomalies. These anomalies might indicate:
          </p>
          <ul>
            <li>Unusual traffic patterns: Spikes in network activity, unauthorized access attempts, or data transfers at odd hours.</li>
            <li>Suspicious user behavior: Sudden access to sensitive files, login attempts from unusual locations, or using unauthorized devices.</li>
            <li>System anomalies: Frequent errors, unexpected crashes, or changes in resource usage.</li>
          </ul>
          <p>
            These anomalies are then brought to the attention of our security so we can investigate further and determine if they are genuine threats.
          </p>
        </div>
      </section>

      <section className="section">
        <h2 className="section-heading">Choose an AI Solution</h2>
        <div className="section-text">
          <p>
            There are various AI-powered security solutions available, both pre-built and customizable. Research and compare them based on specified requirements, budget, and technical expertise.
          </p>
          <p>
            Consider factors like ease of deployment and integration with existing infrastructure, scalability to handle the volume of your data, and customization options to tailor the solution to your specific threats and data.
          </p>
        </div>
      </section>

      <section className="section">
        <h2 className="section-heading">Implementation</h2>
        <div className="section-text">
          <p>
            We have a vast ocean of data, containing network traffic logs, user behavior records, and system event logs. ML algorithms act like sophisticated submarines, capable of navigating and analyzing this data in real-time. Their mission? To identify anomalies, which are deviations from normal patterns, that could signal a potential attack.
          </p>
          <p>
            <strong>Here's how they work:</strong>
          </p>
          <ol>
            <li><strong>Training:</strong> ML models are trained on historical data labeled with known attacks and normal activity. This training allows the model to learn the "normal" behavior of your network and users.</li>
            <li><strong>Anomaly detection:</strong> Once trained, the model continuously analyzes incoming data. Any significant deviation from the established patterns, such as:
              <ul>
                <li>Unusual spikes in network traffic.</li>
                <li>Unauthorized access attempts.</li>
                <li>Suspicious changes in user behavior (e.g., sudden access to highly sensitive files).</li>
                <li>Unusual program execution or resource usage.</li>
                <li>Frequent system errors or security events.</li>
              </ul>
              These anomalies can then be flagged for further investigation by security professionals, allowing them to identify and respond to potential threats before they escalate.
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}

export default DetailPage;
