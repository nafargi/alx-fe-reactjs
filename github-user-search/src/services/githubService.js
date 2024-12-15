// services/githubService.js
import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users';

export const fetchUserData = async (username, location, minRepos, page = 1) => {
    try {
        const query = [
            `q=${username ? `user:${username}` : ''}`,
            location ? `location:${location}` : '',
            minRepos ? `repos:>=${minRepos}` : '',
        ]
            .filter(Boolean)
            .join(' '); // Construct query string with the valid filters

        const response = await axios.get(`${BASE_URL}?${query}&page=${page}&per_page=10`);
        return response.data; // Return the response data
    } catch (error) {
        throw new Error('Error fetching user data.');
    }
};
