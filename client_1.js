let mqtt = require("mqtt")
const options = {
    connectTimeout: 4000,// 超时时间
    // 认证信息 按自己需求填写
    clientId:'9999',
    username:'wjm2',
    password:'9999',
}
let client = mqtt.connect("http://www.wjmwjh.top:6068",options)
client.on('error', (error) => {
    console.log('连接失败:', error)
})

// 连接后不断发布temp topic
client.on("connect", (e) => {
    console.log("success connect mqtt server");
    setInterval(() => {
        client.publish("me", `1`)
        console.log('-=-=-=0000-=-=-=-');
    }, 2000)
})
