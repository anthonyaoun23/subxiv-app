import { useState } from 'react'
import './App.css'

function App() {
  const [apiStatus, setApiStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const checkApiStatus = async () => {
    setLoading(true);
    try {
      // Replace with your actual API URL when deployed
      const response = await fetch('http://localhost:8787');
      const data = await response.json();
      setApiStatus(data.message);
    } catch (error) {
      setApiStatus('Error connecting to API');
      console.error('API connection error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>SubXiv</h1>
      <h2>Next-Gen arXiv Monitoring App</h2>
      
      <div className="card">
        <p>
          A personalized research monitoring system where users define their intellectual 
          interests through natural language prompts and structured filters to receive 
          curated arXiv updates.
        </p>
        
        <button onClick={checkApiStatus} disabled={loading}>
          {loading ? 'Checking API...' : 'Check API Status'}
        </button>
        
        {apiStatus && (
          <div className="api-status">
            <p><strong>API Response:</strong> {apiStatus}</p>
          </div>
        )}
      </div>
      
      <p className="read-the-docs">
        Coming soon: AI-assisted paper analysis, advanced notifications, and collaborative knowledge dashboards.
      </p>
    </div>
  )
}

export default App