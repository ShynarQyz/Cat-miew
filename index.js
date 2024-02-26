
// const { json } = require('express');
// const http = require('http')
// const PORT = 8000;
// const host = 'localhost';
// const server = http.createServer((req , res) => {
//     if(req.url === '/') {
//         const index = require('index')
//         res.end(JSON.stringify(index))
//         // const  fs = require('fs');
//         // const path = require('path')
//         // fs.readFileSync(path.join(__dirname + '/index.html'))
//         // res.sendFile(__dirname + '/index.html')

//         // res.end(`Hello`)
//     }
//     })
//     // if(req.url === '/') {
//     // } else if(req.url === '/yes'){
//     //     fs.readFile('./yes.html' , 'utf-8')
//     // }
// //     console.log(`Server is running on http://${host}:${PORT}`);
// // })

// JSON.stringify()
// server.listen(PORT, host, () => {
//     console.log(`Server is running on http://${host}:${PORT}`);

// })

// // const fs = require('fs').promises   // promises даем обещание 
// // // fs.writeFileSync('index.html' , 'utf-8')
// // // const path = require('path')
// // // fs.writeFileSync(path.join(__dirname , 'index.html' , 'utf-8'))

// // const requestListener = function (req, res) {
// //     // fs.readFile(__dirname + "/index.html")
// //     fs.readFile('./index.html' , 'utf-8')
// //     .then(contents => {
// //         res.setHeader("Content-Type" , "text/html");
// //         res.writeHead(200);
// //         res.end(contents);
// //     })
// //     .catch(err => {
// //         res.writeHead(500);
// //         res.end(err);
// //         return;
// //     });
// // };
// // Если обещание fs.readFile() успешно выполняется, оно возвращает свои данные. Для этого случая мы используем метод then(). Параметр contents содержит данные файла HTML.




// // // const fs = require('fs')
// // // const path = require('path')
// // // const server = http.createServer((req , res) => {
// // //     console.log('yes');
// // //     if(req.url === '/') {
// // //         fs.readFile('./index.html' , 'utf-8' , (err , data) => {
// // //             if(err) {
// // //                 console.log(err);
// // //                 res.statusCode = 500;
// // //                 res.end('Error reading file');
// // //             } else {
// // //                 res.end(data);
// // //             }
// // //         });
// // //     }
// // // })

// // // const PORT = 4000;

// // // server.listen(PORT, () => {
// // //     console.log(`Server works  on ${PORT} port`);
// // // })

// // https://blackbox.ai/share/f5eb3382-6609-41d3-ba35-83de88c34d98


const express = require('express');
const app = express();
app.use(express.json())
const port = 4000;


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

// app.get('/yes' , (req , res) => {
//     res.sendFile(__dirname  + './yes.html');
//     // res.render("yes")
// })


// app.get('/yes', require('./yes'));

// module.experts = YES; 

app.listen(port , () => {
    console.log(`Server works on ${port} port`);
});

app.set("view engine" , "ejs")

// const YES = require('./yes')
// console.log(YES);

// app.get('/' , (req , res) => {
//     res.render('index')
// })

app.get('/yes' , (req , res) => {      // открыть новую страницу в этой вкладке 
    res.render('yes')
})
// http://localhost:4000/yes

// function nextPage() {
// //     app.get('/yes' , (req , res) => {      // открыть новую страницу в этой вкладке 
// //     res.render('yes')
// // })
//     window.location.href = "yes.html";
// }

// function moveButton() {
//     var x = Math.random() * (window.innerWidth - document.getElementById('noButton').offsetWidth);
//     var y = Math.random() * (window.innerHeight - document.getElementById('noButton').offsetHeight);
//     document.getElementById('noButton').style.left = `${x}px`;
//     document.getElementById('noButton').style.top = `${y}px`;
// }

