export async function fetchData(ip) {
    const ipUrl = process.env.REACT_APP_IP_API_URL
    const url = `${ipUrl}${ip}`

    try {
        return await fetch(url);
    } catch (err) {
        const error = {
            error: true,
            message: err.message
        }
        return error;
    }
}