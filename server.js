// express 라이브러리 사용 코드
const express = require('express')
const app = express()

// public 파일 지정
app.use(express.static('public'));

// ejs 세팅 (javaScript 문법 그대로 사용하기)
app.set('view engine', 'ejs')

// 서버 띄우기
app.listen(8080, ()=>{
    console.log('http://localhost:8080에서 서버 실행 중')
})

// main page 접속하기
app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/views/index.html')
    app.use(express.static(__dirname + 'public/main.css'))
})

app.get('/aboutMe', (request, response)=> {
    response.sendFile(__dirname + '/views/about.html')
})

app.get('/skills', (request, response)=> {
    response.sendFile(__dirname + '/views/skills.html')
})

app.get('/work', (request, response)=> {
    response.sendFile(__dirname + '/views/work.html')
})

app.get('/work/design', (request, response)=> {
    
    response.sendFile(__dirname + '/views/workFront.html')
})

app.get('/work/fullStack', (request, response)=> {
    response.sendFile(__dirname + '/views/workBack.html')
})
