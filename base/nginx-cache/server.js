const http = require('http');
const fs = require('fs')

http.createServer(function(request, response) {
    // request.headers.host:被代理的地址
    console.log('request come', request.url, request.headers.host)

    const html = fs.readFileSync("test.html", "utf8");
   if(request.url === '/'){
       
       response.writeHead(200, {
           'Content-Type': 'text/html'
       })
       response.end(html)
   }
    if (request.url === '/data') {
        response.writeHead(200, {
			// s-max-age 给代理缓存用的 private表示代理服务器不能缓存 no-store都不缓存
			"Content-Type": "max-age=5, s-max-age=20, private",
			"Vary": "X-Test-Cache" //只有当请求头为X-Test-Cache时，才能使用缓存
		});
        response.end(html);
        
    }

}).listen(8888)
console.log("server listening on 8888");
