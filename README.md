# glip-hubot-t

Sample Glip chatbot based on hubot and Glip Rest API.


## Install software

Download the source code, then:

```
yarn install
```


## Run

```
HUBOT_GLIP_SERVER=https://platform.ringcentral.com \
HUBOT_GLIP_APP_KEY=appKey \
HUBOT_GLIP_APP_SECRET=appSecret \
HUBOT_GLIP_USERNAME=username \
HUBOT_GLIP_EXTENSION=extension \
HUBOT_GLIP_PASSWORD=password \
./bin/hubot -a glip -n t
```


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
