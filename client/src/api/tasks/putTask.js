const API_URL = 'http://localhost:8081/tasks'

const putTask = async (taskId) => {
    var URL = API_URL + '/' + taskId;
    const response = await fetch(URL, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    if (!response.ok){
        throw new Error('Failed to update task.');
    }

    return await response.json();
}

export default putTask;