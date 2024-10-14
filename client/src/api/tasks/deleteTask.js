const API_URL = 'http://localhost:8081/tasks';

export const deleteTask = async (taskId) => {
    const URL = `${API_URL}/${taskId}`;
    const response = await fetch(URL, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error('Failed to delete task.');
    }

    return await response.json();
};
