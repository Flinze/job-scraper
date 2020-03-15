var fetch = require('node-fetch');
var redis = require("redis");
var client = redis.createClient();

const { promisify } = require("util");
const setAsync = promisify(client.set).bind(client);

const baseURL = 'https://jobs.github.com/positions.json'

async function fetchGithub() {

    console.log('fetching github')

    let resultCount = 1,  onPage = 0;
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

    console.log('got', allJobs.length, 'jobs total')

    // filter algo
    const jrJobs = allJobs.filter(job => {
        const jobTitle = job.title.toLowerCase();
        let isJunior = true;
        
        // algo logic
        if (
            jobTitle.includes('senior') ||
            jobTitle.includes('manager') ||
            jobTitle.includes('sr.') ||
            jobTitle.includes('architect') 
        ) {
            return false;
        } 

        return true;
    })

    console.log('filtered down to ', jrJobs.length);

    // Set in redis
    const success = await setAsync('github', JSON.stringify(jrJobs));

    console.log({success});
}

module.exports = fetchGithub;