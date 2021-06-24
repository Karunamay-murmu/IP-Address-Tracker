export async function apiCall(ip) {
    const key = process.env
    const url = `https://geo.ipify.org/api/v1?apiKey=at_2cWQaPRklUpRBYG7BezJQQyif58C7&ipAddress=${ip}`

    console.log(key)

    // try {
    //     const data = await fetch(url);
    //     return await data.json();

    // } catch (err) {
    //     return err
    // }

}