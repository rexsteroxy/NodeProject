const fs = require('fs');


const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>server page</title></head>');
        res.write('<body><form action="/message" method="POST">');
        res.write(' <input type="text" name="message" placeholder="message">');
        res.write('<input type="submit">')
        res.write('</fomm>')
        res.write('</body>');
        res.write('<html>');;
        return res.end();

    }
    if (url === "/message" && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            //console.log(chunk);
            body.push(chunk);
        });
 
        return req.on('end', () => {
            let passedBody = Buffer.concat(body).toString();
            //console.log(passedBody);
            let message = passedBody.split('=')[1];
            //console.log(message);
            fs.writeFile('message.txt', message, err => {
                
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });


        })


    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>server page</title></head>');
    res.write('<body><h1>Hello Am Creating My Own Server </h1></body>');
    res.write('<html>');
    res.end();


}

//module.exports = requestHandler;

// module.exports = {
//     handler: requestHandler,
//     justSay: "Am just mastering node"
// }

// module.exports.handler = requestHandler;
// module.exports.justSay = "Am just mastering node";

exports.handler = requestHandler;