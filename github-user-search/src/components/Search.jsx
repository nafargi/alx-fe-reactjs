import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState('');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setUserData(null);

        try {
            const data = await fetchUserData(username, location, minRepos, page);
            setUserData(data);
        } catch (err) {
            setError("Looks like we cant find the user");
        } finally {
            setLoading(false);
        }
    };

    const handleLoadMore = () => {
        setPage((prevPage) => prevPage + 1);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-semibold text-center">GitHub User Search</h1>
            <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
                <div className="flex gap-4">
                    <input
                        type="text"
                        placeholder="GitHub Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="p-2 border rounded w-full"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="p-2 border rounded w-full"
                    />
                </div>
                <div className="flex gap-4">
                    <input
                        type="number"
                        placeholder="Min Repos"
                        value={minRepos}
                        onChange={(e) => setMinRepos(e.target.value)}
                        className="p-2 border rounded w-full"
                    />
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 w-full">
                        Search
                    </button>
                </div>
            </form>

            {/* Conditional Rendering */}
            {loading && <p className="text-center">Loading...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}
            {userData && userData.items && userData.items.length > 0 && (
                <div className="mt-6 space-y-4">
                    {userData.items.map((user) => (
                        <div key={user.id} className="p-4 border rounded-lg shadow-lg">
                            <div className="flex items-center space-x-4">
                                <img src={user.avatar_url} alt={user.login} width={50} className="rounded-full" />
                                <div>
                                    <h2 className="font-semibold text-lg">{user.login}</h2>
                                    <p className="text-sm">{user.location || "Location not available"}</p>
                                    <p className="text-sm">Repos: {user.public_repos}</p>
                                    <a
                                        href={user.html_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:underline"
                                    >
                                        View Profile
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="text-center mt-4">
                        <button
                            onClick={handleLoadMore}
                            className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
                        >
                            Load More
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Search;
