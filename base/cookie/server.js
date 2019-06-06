const http = require('http');
const fs = require('fs')

http.createServer(function(request, response) {
    console.log('request come', request.url)
    if (request.url === "/") {
        const html = fs.readFileSync("test.html", "utf8");
        // 可以在host文件中设置 a.test.com:127.0.0.1 实现以下方法
		if(host === 'a.test.com'){
            response.writeHead(200, {
                "Content-Type": "text/html",
                // 主域名下二级域名可以共享的cookie 的设置方式 a.test.com和b.test.com都会有cookie
				"Set-Cookie": ["id=123", "abc=456;domain=test.com"]
			});
        }
		response.end(html);
	}
   

}).listen(8888)
console.log("server listening on 8888");
