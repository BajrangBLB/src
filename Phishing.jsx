import React from 'react';
import './identify.css'; // Import CSS file for styling
import image from '../src/PE.jpg'; // Import image
import Card from '../src/Card'

const DetailPage = () => {
  return (
    <>
 
    <div className="detail-page" style={{ backgroundColor: '#f0f0f0' }}>
      <section className="section">
     
        <h2 className="section-heading">Identifying phishing </h2>
        <Card/>
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
          <p>
       
            Identifying Phishing Emails with AI:
          </p>
          <ol>
            <li><strong>Analyzing Phishing Emails:</strong>
              <ul>
                <li>Checks for keywords and phrases commonly used in phishing attempts (e.g., "urgent," "account suspension").</li>
                <li>Analyzes sentiment and language style for unnatural or threatening tones.</li>
                <li>Examines sender information for inconsistencies and compares with past legitimate emails.</li>
                <li>Analyzes email structure for formatting inconsistencies and suspicious attachments/links.</li>
              </ul>
            </li>
            <li><strong>Machine Learning:</strong>
              <ul>
                <li>Identifies patterns from past phishing and legitimate emails.</li>
                <li>Creates classification models to categorize new emails as "phishing" or "legitimate."</li>
                <li>Adapts and improves as it encounters new tactics and email formats.</li>
              </ul>
            </li>
          </ol>
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
         
          <p>
            Implementing AI for Phishing Detection:
          </p>
          <ol>
            <li><strong>Option 1: Utilize Pre-Built Solutions:</strong>
              <ul>
                <li>Several pre-built AI-powered email security solutions are available.</li>
                <li>These solutions provide us an easy integration with existing email infrastructure.</li>
                <li>They handle data preparation, training, and deployment, requiring less technical expertise.</li>
              </ul>
            </li>
            <li><strong>Option 2: Build Your Own Solution (Advanced Users):</strong>
              <ul>
                <li>Requires significant technical expertise and resources.</li>
                <li>Steps involved:
                  <ul>
                    <li>Choose an open-source NLP library (e.g., NLTK, spaCy).</li>
                    <li>Collect and pre-process email data (phishing and legitimate).</li>
                    <li>Train a machine learning model (e.g., Random Forest, Support Vector Machine).</li>
                    <ul>
                      <li><strong>Random Forest:</strong> Random Forest is an ensemble learning technique that builds multiple decision trees during training and outputs the mode of the classes (classification) or the mean prediction (regression) of the individual trees.</li>
                      <li><strong>Support Vector Machine (SVM):</strong> SVM is a supervised learning algorithm that can be used for classification or regression tasks. It works by finding the hyperplane that best separates the data points into different classes. SVMs are effective in handling both linearly separable and non-linearly separable data, making them suitable for phishing detection tasks where the data may not be linearly separable.</li>
                    </ul>
                    <li>Integrate the model with your email server for real-time analysis.</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </section>
    </div>
    </>
  );
}

export default DetailPage;
