import './App.css'
import { useState } from 'react';
import { useFetch } from './customHooks/useFetch'

function App() {
  const [inputUrl, setInputUrl] = useState('');
  const [fetchUrl, setFetchUrl] = useState('');
  const { data, error, loading } = useFetch(fetchUrl);

  const handleFetch = () => {
    setFetchUrl(inputUrl);
  };

  return (
    <> 
      <h1>Enter a URL</h1>
      <input 
        type="text" 
        value={inputUrl} 
        onChange={(e) => setInputUrl(e.target.value)} 
      />
      <button onClick={handleFetch}>Fetch</button>
      <div>
        <h2>Fetch Results</h2>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </>
  )
}

export default App