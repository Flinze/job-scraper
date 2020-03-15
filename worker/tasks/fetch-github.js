var fetch = require('node-fetch');

const baseURL = 'https://jobs.github.com/positions.json'

async function fetchGithub() {

    let resultCount = 1,  onPage = 0;

    // empty array to get results from API
    const allJobs = [];

    // fetches all the pages in the pages
    while(resultCount > 0) {
        const res = await fetch(`${baseURL}?page=${onPage}`);
        const jobs = await res.json();

        // puts all the jobs into array
        allJobs.push(...jobs);
        resultCount = jobs.length;
        console.log('got', resultCount, 'jobs');
        onPage++;
    }

    console.log('got'. allJobs.length, 'jobs toal');
}

fetchGithub();

module.exports = fetchGithub;