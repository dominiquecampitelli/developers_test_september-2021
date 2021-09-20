import qs from 'query-string';

export default async function api(url, query, options) {
    let headers;
    const params = qs.stringify({ ...query });
    const token = sessionStorage.getItem('token');

    if (token) {
        headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        };
    } else {
        headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        };
    }

    const response = await fetch(
        `https://node-netflicos.herokuapp.com${url}?${params}`,
        {
            ...options,
            headers,
        }
    );
    const data = await response.json();

    return data;
}
