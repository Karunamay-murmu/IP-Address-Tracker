export async function fetchData(ip) {
    const ipUrl = `https://ipapi.co/${ip}/json/`
    const domainUrl = `https://ipwhois.app/json/${ip}`

    const isDomain = /[a-zA-Z]/gi.test(ip);
    const isIPv6 = ip.includes(':');

    const url = (isDomain && !isIPv6) ? domainUrl : ipUrl;

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