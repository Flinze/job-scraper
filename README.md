# job-scraper

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
