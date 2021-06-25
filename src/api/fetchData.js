export async function fetchData(ip) {
    const key = process.env.REACT_APP_API_KEY;
    const url = `https://geo.ipify.org/api/v1?apiKey=${key}&ipAddress=${ip}`

    try {
        return await fetch(url);
    } catch (err) {
        return { error: err }
    }

}