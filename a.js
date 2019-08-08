var express = require('express');
const app = express();  
console.log('Running on http://localhost:3000');
app.listen(3000);

app.get('/', (req, res) => {
    res.redirect('/pong');
}
);
app.post('/ping', (req, res) => {
    res.send(
        `
        <p>Ping?</p>
        <form method="POST" action="/pong">
            <button>Pong!</button>
        </form>
        `

    );
}
);
app.all('/pong', (req, res) => {
    res.send(
     `
    <p>Pong?</p>
        <form method="POST" action="/ping">
            <button>Ping!</button>  
       </form>
      `
    );
}
);
