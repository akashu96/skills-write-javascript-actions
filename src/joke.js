const { get } = require("request");
const request = require("request-promise");

const options = {
    method: "GET",
    uri: "http://icanhazdadjoke.com/",
    headers: {
        Accept: "application/json",
        "User-Agent": "Testing Purpose",
    },
    json:true,
};

async function getJoke() {
    const res = await request(options);
    return res.joke;
}

module.exports = getJoke;

