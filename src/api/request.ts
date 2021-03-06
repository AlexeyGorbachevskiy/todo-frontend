
export const request = async (url: string, method = 'GET', body = null as any, headers: any = {
    'Content-Type': 'application/json',
}) => {
    try {
        if (body) {
            body = JSON.stringify(body);
            headers['Content-Type'] = 'application/json';
        }

        const response = await fetch(`https://todo-backend-node-js.herokuapp.com${url}`, {method, body, headers});
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Error is occurred');
        }

        return data;
    } catch (e) {
        throw e;
    }
}
