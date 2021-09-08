# Sheena server

Sheena is actually an AI assistant for use in personal life.
The app in this repository has the task of converting the text into commands for use in a variety of devices (perhaps Sheena device in future) on the server side.
On the client side, you can convert commands from speech to text and send them to Sheena-server to give you the answer.
Now for the Sheena can use a special token. And for each set of commands, use the created ID for each session to access the previous commands and make more accurate predictions.

## Installation and usage


```bash
git clone https://github.com/HosseinDotLink/sheena-server.git

cd sheena-server

nano .env // define PORT and AUTHTOKEN then ctrl + o and enter - ctrl + x and enter

npm i

npm start
```

## How it works

Generate a session id
```bash
curl --location --request GET 'localhost:3000/v1/session/generate' \
--header 'token: $AUTHTOKEN'
```

Text to command
```bash
curl --location --request POST 'localhost:3000/v1/text/process' \
--header 'token: $AUTHTOKEN' \
--header 'session: $SESSIONID' \
--header 'Content-Type: application/json' \
--data-raw '{
    "text": "your text will be here"
}'
```

## Roadmap
- [x] initial commands
- [x] add session
- [ ] session data cache by redis
- [ ] search and summery
- [ ] wikipedia
- [ ] play music
- [ ] running application by text
- [ ] etc
