# jsforce-platform-events

Subscribe to a platform event using jsForce. The app logs incoming events.

## Setup

```
git clone git@github.com:trevorscott/jsforce-platform-events.git && cd jsforce-platform-events
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


## License

MIT License, so do whatever!

Copyright (c) [2019] [Cowie]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
