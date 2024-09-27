// express 라이브러리 사용 코드
const express = require('express')
const app = express()

// 서버 띄우기
app.listen(8080, ()=>{
    console.log('http://localhost:8080에서 서버 실행 중')
})

// main page 접속하기
app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})