const API_URL = 'http://localhost:8081/tasks';

export const getTasks = async () => {
    const response = await fetch(API_URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch tasks');
    }

    return await response.json();
};
