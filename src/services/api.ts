const BASE_URL = "http://localhost:3000";

async function secureFetch(endpointUrl: string, options: RequestInit = {}): Promise<Response> {
    const fetchOptions: RequestInit = {
        ...options,
        credentials: 'include',
    };

    let response = await fetch(`${BASE_URL}/${endpointUrl}`, fetchOptions);

    if (response.status === 401) {
        const isRefreshed = await refreshToken();
        if (isRefreshed) {
            response = await fetch(`${BASE_URL}/${endpointUrl}`, fetchOptions);
        } else {
            throw new Error('Authentication failed');
        }
    }

    return response;
};

async function refreshToken(): Promise<boolean> {
    try {
        const response = await fetch(`${BASE_URL}/refresh`, {
            method: 'POST',
            credentials: 'include',
        });

        return response.ok;
    } catch (e) {
        return false;
    }
};

const get = async (url: string): Promise<Response> => secureFetch(url);
const post = async (url: string, body: any): Promise<Response> => {
    return secureFetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' }
    });
};
const put = async (url: string, body: any): Promise<Response> => {
    return secureFetch(url, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' }
    })
};
// Special naming due to JS naming limitations
const deleteMethod = async (url: string, body: any): Promise<Response> => {
    return secureFetch(url, {
        method: 'delete',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' }
    })
}

export const api = {
    get,
    post,
    put,
    delete: deleteMethod
}