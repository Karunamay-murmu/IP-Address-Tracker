export async function apiCall(ip) {
    const key = process.env.REACT_APP_API_KEY;
    const url = `https://geo.ipify.org/api/v1?apiKey=${key}&ipAddress=${ip}`

    try {
        const data = await fetch(url);
        console.log(data)
        return await data.json();

    } catch (err) {
        return { error: err }
    }

}