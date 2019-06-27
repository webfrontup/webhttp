## XSS
http://www.zhufengpeixun.com/plan/html/41.safe.html
```html
// 与https://segmentfault.com/index.html 同源的页面有
A）https://segmentfault.com:80/lives //此端口为80和https的port443不一致所以不是同源
B）https://www.segmentfault.com/index.php //域名不一样，所以不是同源
C）http://segmentfault.com/test.html //协议不一样 一个http 一个https
D）https://segmentfault.com:443/lives //同源 端口、协议一致
E）data:text/html;,<html><body></body></html> //独立上下文，和所有http都不同源

```
### 被DDos攻击的成因
```
1，网页劫持，dns劫持，调到假网站、页面、脚本被篡改，插入恶意代码（https 工信部投诉）
2，缓存投毒，访问A站点是，加载了B站点的通用脚本，缓存时间非常长。再访问B站点时中招 （https 个人：连公共热点时全程vpn）
3，文件投毒，在非官方网站下载了某个库；官方下载地址被攻击；迅雷网络加速缓存了粗物的文件，已用了不可信的第三方cdn上的资源（去官网下载 只是用可靠资源）
4，客户端投毒，被安装了恶意插件(尤其是chrome插件)（谨慎筛选插件 异站异密 二次验证）
5，自身安全漏洞造成猥琐绕过，产生反射型和存储型xss（）

```
### 各个编码
- ![流程图](https://github.com/webfrontup/webhttp/blob/master/xss/xssimg/jsma.png)
- ![流程图](https://github.com/webfrontup/webhttp/blob/master/xss/xssimg/htmlma.png)
- ![流程图](https://github.com/webfrontup/webhttp/blob/master/xss/xssimg/base64.png)
- ![流程图](https://github.com/webfrontup/webhttp/blob/master/xss/xssimg/urlma.png)

### 被攻击的几种方式
- ![流程图](https://github.com/webfrontup/webhttp/blob/master/xss/xssimg/method_attack.png)
- ![流程图](https://github.com/webfrontup/webhttp/blob/master/xss/xssimg/payload.png)
- ![流程图](https://github.com/webfrontup/webhttp/blob/master/xss/xssimg/protect1.png)
- ![流程图](https://github.com/webfrontup/webhttp/blob/master/xss/xssimg/protect2.png)
- ![流程图](https://github.com/webfrontup/webhttp/blob/master/xss/xssimg/protect3.png)
- ![流程图](https://github.com/webfrontup/webhttp/blob/master/xss/xssimg/savexss.png)
- ![流程图](https://github.com/webfrontup/webhttp/blob/master/xss/xssimg/protect4.png)
- ![流程图](https://github.com/webfrontup/webhttp/blob/master/xss/xssimg/csrf.png)
- ![流程图](https://github.com/webfrontup/webhttp/blob/master/xss/xssimg/sql.png)
- ![流程图](https://github.com/webfrontup/webhttp/blob/master/xss/xssimg/0day.png)

