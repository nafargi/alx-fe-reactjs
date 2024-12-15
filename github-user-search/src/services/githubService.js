// services/githubService.js
import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users?q';

export const fetchUserData = async (username, location, minRepos, page = 1) => {
    try {
        const query = [
            username ? `user:${username}` : '',
            location ? `location:${location}` : '',
            minRepos ? `repos:>=${minRepos}` : '',
        ]
            .filter(Boolean)
            .join(' '); // Construct query string with the valid filters

        // Complete API URL with query and pagination
        const response = await axios.get(`${BASE_URL}?q=${query}&page=${page}&per_page=10`);
        return response.data; // Return the response data
    } catch (error) {
        throw new Error('Error fetching user data.');
    }
};
