export const POST_METHOD = 'POST';

export async function post<T>(url: URL, body: object) : Promise<T> {
    const response = await fetch(url.toString(), {
        method: POST_METHOD,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    const result = await response.json();
    
    if(!response.ok) throw result;
    return result;
}

export async function get<T>(url: URL): Promise<T> {
    const response = await fetch(url.toString());
    const result = await response.json();

    if (!response.ok) throw result;
    return result;
}