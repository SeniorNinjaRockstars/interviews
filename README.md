# Interit (previously interviews)
Interit is a website presenting interview questions, which lets developers refresh their knowledge and prepare for a job interview. The whole site is generated and served as static using Gatsby. Questions are crowdfunded, everyone can submit their idea and after moderator's approval it will be visible after the next rebuild.

## Development
Prepare `.env.development` file basing on `.env.example`

Create `firebase.json` which will contain information about your Firebase project and private key.

```
{
  "type": "service_account",
  "project_id": "...",
  "private_key_id": "...",
  "private_key": "XXX",
  "client_email": "...",
  "client_id": "...",
  "auth_uri": "...",
  "token_uri": "...",
  "auth_provider_x509_cert_url": "...",
  "client_x509_cert_url": "...",
  "firestore": {
    "rules": "firestore.rules",
    "indexes": "firestore.indexes.json"
  },
  "hosting": {
    "public": "public",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ]
  }
}
```

Now install dependencies and run project:
```
npm install
npm start
```

## Screenshots

![](https://raw.githubusercontent.com/SeniorNinjaRockstars/interviews/master/Screenshot-1.png)
![](https://raw.githubusercontent.com/SeniorNinjaRockstars/interviews/master/Screenshot-2.png)
![](https://raw.githubusercontent.com/SeniorNinjaRockstars/interviews/master/Screenshot-3.png)
