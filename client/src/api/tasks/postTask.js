const API_URL = 'http://localhost:8081/tasks'

const postTask = async (taskName) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: taskName, completed: false }),
    });

    if (!response.ok){
        throw new Error('Failed to create task');
    }

    return await response.json();
}

export default postTask;