# job-scraper
A job basic scraping web application that scrapes job listings for entry level positions. 

# To run locally:
Client:
 From root folder, go into client and run "npm start"

API:
    From root folder, run "node api/index.js"

Redis (only need to do this step once):
    1. Run redis server with: "redis-server" in root
    2. Can run CLI with "redis-cli" in root

# Front-end:
React
 - Basic MVP front-page that lists positions

# Back-end:

Redis
- According to Redis homepage, Redis is an open source (BSD licensed), in-memory data structure store, used as a database, cache and message broker.
- It supports various data structures such as Strings, Hashes, Lists, Sets etc.
- In my case, using Redis to store the job content pulled from online, and storing it in cache.
- use: because it is easy to use, and is very fast, perfect for acting as a temporary storage as cache.

Node
- "Worker" component: 
    - fetches job listings with "node-fetch" from various websites (e.g. GitHub jobs) from tasks folder
    - "node-cron" job which is a task scheduler that runs our fetching script every x amount of time (e.g. 1 minute)
        - Found a neat website to figure out scheduler timings: https://crontab.guru/
        
# Project Screenshots
![HomePage](https://i.imgur.com/pNflWSd.png)
![Pagination](https://i.imgur.com/LVTn1N0.png)
