import { useState, useEffect } from 'react';
import api from '../services/api';

function TestConnection() {
  const [status, setStatus] = useState('checking'); // 'checking' | 'success' | 'error'
  const [message, setMessage] = useState('');

  useEffect(() => {
    api.get('/health/')
      .then((response) => {
        setStatus('success');
        setMessage(response.data.message);
      })
      .catch((error) => {
        setStatus('error');
        setMessage(error.message || 'Could not reach backend');
      });
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a0a0f] text-white px-6">
      <h1 className="text-3xl font-bold mb-6">DevPulse Connection Test</h1>

      {status === 'checking' && (
        <p className="text-gray-400">Checking connection...</p>
      )}

      {status === 'success' && (
        <div className="text-center">
          <p className="text-6xl mb-4">✅</p>
          <p className="text-green-400 text-lg">{message}</p>
        </div>
      )}

      {status === 'error' && (
        <div className="text-center">
          <p className="text-6xl mb-4">❌</p>
          <p className="text-red-400 text-lg">Failed to connect: {message}</p>
          <p className="text-gray-500 text-sm mt-2">
            Make sure the Django server is running on localhost:8000
          </p>
        </div>
      )}
    </div>
  );
}

export default TestConnection;