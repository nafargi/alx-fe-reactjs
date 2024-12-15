import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import Search from './components/Search';  // Import the Search component

function App() {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        {/* Header Section */}
        <header className="bg-blue-600 text-white p-4 text-center">
          <h1 className="text-2xl">GitHub User Search</h1>
        </header>
        
        {/* Main Content */}
        <main className="flex-grow container mx-auto p-4">
          <Routes> {/* Replaces Switch */}
            <Route path="/" element={
              <>
                <Search
                  setLoading={setLoading}
                  setUserData={setUserData}
                  setError={setError}
                />
                {/* Display loading or error message */}
                {loading && <p className="text-center text-lg">Loading...</p>}
                {error && <p className="text-center text-red-600">{error}</p>}

                {/* Display user data once fetched */}
                {userData && (
                  <div className="mt-4 p-4 bg-white shadow rounded">
                    <h2 className="text-xl font-semibold">{userData.login}</h2>
                    <img
                      src={userData.avatar_url}
                      alt={userData.login}
                      className="w-20 h-20 rounded-full"
                    />
                    <p className="mt-2">Location: {userData.location || 'Not available'}</p>
                    <p className="mt-2">Repositories: {userData.public_repos}</p>
                    <a
                      href={userData.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 mt-4 inline-block"
                    >
                      Visit Profile
                    </a>
                  </div>
                )}
              </>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
