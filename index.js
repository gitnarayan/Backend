require('dotenv').config()
const express = require("express");
const app = express();
const port = 3000;




const githubdata ={
    
        "login": "gitnarayan",
        "id": 107856223,
        "node_id": "U_kgDOBm3BXw",
        "avatar_url": "https://avatars.githubusercontent.com/u/107856223?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/gitnarayan",
        "html_url": "https://github.com/gitnarayan",
        "followers_url": "https://api.github.com/users/gitnarayan/followers",
        "following_url": "https://api.github.com/users/gitnarayan/following{/other_user}",
        "gists_url": "https://api.github.com/users/gitnarayan/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/gitnarayan/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/gitnarayan/subscriptions",
        "organizations_url": "https://api.github.com/users/gitnarayan/orgs",
        "repos_url": "https://api.github.com/users/gitnarayan/repos",
        "events_url": "https://api.github.com/users/gitnarayan/events{/privacy}",
        "received_events_url": "https://api.github.com/users/gitnarayan/received_events",
        "type": "User",
        "site_admin": false,
        "name": null,
        "company": null,
        "blog": "",
        "location": null,
        "email": null,
        "hireable": null,
        "bio": null,
        "twitter_username": null,
        "public_repos": 18,
        "public_gists": 0,
        "followers": 0,
        "following": 0,
        "created_at": "2022-06-20T11:38:43Z",
        "updated_at": "2024-08-17T06:32:59Z"
      }


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/fb", (req, res) => {
  res.send("ai!");
});


app.get("/login", (req, res)=>{
    res.send('<h1>please login</h1>');
})


app.get("/tesla", (req,res)=>{
    res.send('<h2> my favroute car </h2>');
})

app.get("/github", (req,res)=>{
    res.json(githubdata);
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
