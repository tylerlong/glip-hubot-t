# glip-hubot-t

Sample Glip chatbot based on hubot and Glip Rest API.


## Install software

Download the source code, then:

```
yarn install
```


## Run

```
HUBOT_GLIP_SERVER=https://platform.devtest.ringcentral.com \
HUBOT_GLIP_APP_KEY=app-key \
HUBOT_GLIP_APP_SECRET=app-secret \
HUBOT_GLIP_BOT_SERVER=https://xxxxxxx.ngrok.io \
./bin/hubot -a glip -n t
```

`HUBOT_GLIP_BOT_SERVER` is required the first time you add the bot to Glip.



## Usage

```
t group_id
t send to group <group_id> <message> <n> times
```


## Example

```
You > t group_id
Bot > 12345678
You > t send to group 12345678 hello 3 times
Bot > hello
Bot > hello
Bot > hello
You > t send to group 12345678 这是第<n>条消息 3 times
Bot > 这是第1条消息
Bot > 这是第2条消息
Bot > 这是第3条消息
```


## Note

When you create the app on RingCentral, an oauth redirect URI is required.

Please read https://github.com/tylerlong/hubot-glip#note if you don't know how to specify it.
