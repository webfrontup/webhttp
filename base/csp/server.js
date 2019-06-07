const http = require('http');
const fs = require('fs')

http.createServer(function (request, response) {
    console.log('request come', request.url)

    if(request.url === '/'){
        const html = fs.readFileSync("test.html", "utf8");
        response.writeHead(200, {
            'Content-Type': 'text/html',
            // 'Content-Security-Policy': 'default-src http:' 
            // report-uri 浏览器主动发起请求 自行发出的报告 看 request Payload
            // 'Content-Security-Policy': 'script-src \'self\';form-action \'self\'; report-uri /report'
            'Content-Security-Policy-Report-Only': 'script-src \'self\';form-action \'self\'; report-uri /report'
        })
        response.end(html)
    }else{
        response.writeHead(200, {
            'Content-Type': 'application/javascript'
        })
        response.end('console.log("loaded script")')
    }

}).listen(8888)

console.log('server listening on 8888')


