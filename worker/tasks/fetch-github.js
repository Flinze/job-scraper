var fetch = require('node-fetch');
var redis = require("redis");
var client = redis.createClient();

const { promisify } = require("util");
// const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

const baseURL = 'https://jobs.github.com/positions.json'

async function fetchGithub() {

    let resultCount = 1,  onPage = 0;

    // empty array to get results from API
    const allJobs = [];

    // fetches all the pages
    while(resultCount > 0) {
        const res = await fetch(`${baseURL}?page=${onPage}`);
        const jobs = await res.json();

        // puts all the jobs into array
        allJobs.push(...jobs);
        resultCount = jobs.length;
        console.log('got', resultCount, 'jobs');
        onPage++;
    }

    // filter algo
    

    // Set in redis
    console.log('got', allJobs.length, 'jobs total')
    const success = await setAsync('github', JSON.stringify(allJobs));

    console.log({success});
}

module.exports = fetchGithub;