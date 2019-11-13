# jsforce-platform-events

Subscribe to a platform event using jsForce

## Setup

```
git clone jsforce-platform-events && cd jsforce-platform-events
npm install
```

Create a `.env` file in the root directory of this project and populate it with the following:

```
SF_USERNAME=username@your_sf_org.example
SF_PASSWORD_AND_TOKEN=password_with_appended_security_token
EVENT_TO_SUBSCRIBE_TO=LightningUriEventStream
```

## Run

```
node index.js
```
