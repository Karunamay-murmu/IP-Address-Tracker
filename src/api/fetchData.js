export async function fetchData(ip) {
    // const key = process.env.REACT_APP_API_KEY;
    // const url = `https://geo.ipify.org/api/v1?apiKey=${key}&ipAddress=${ip}`

    const ipUrl = process.env.REACT_APP_IP_API_URL
    const url = `${ipUrl}${ip}`

    try {
        return await fetch(url);
    } catch (err) {
        return { error: err }
    }

}