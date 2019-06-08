# webhttp
about http&amp;&amp;ajax

## Front
- html(5) css(3)
- js...


## BackEnd
- node
- java
- go
- python
- c
- php
- c#

## Database
- mysql
- sql server
- oracle
- mongodb
- xorm
- ...

## 自动化
- git/svn/gitee/gitlub
- webpack rollup.js
- 服务器部署工具 iis/apache/nginx...
- linux操作系统
- 


## 规划建议
- 人脉圈，以及建立自己的影响力
- 综合能力/参加技术峰会活动/开放分享

## 建站
- 通过PTF把自己本地的项目文件上传到服务器指定的目录中（filezilla: ftp上传文件的工具）

### Cache-Control
> 缓存头
- public private no-cache
- max-age: <`secodes`>多久到期
- s-maxage: <`secodes`>代理服务器缓存多久到期
- max-stale: <`secodes`>发起请求这方主动代理的头
> 重新验证 
- must-revalidate
- proxy-revalidate
> 其他
- no-store 永远要要从服务器拿新的内容
- no-transform 限制代理服务器 不能随便压缩和格式转换

### 验证头
> Last-Modified 上次修改时间 
- 配合 `If-Modified-Since` 或者 `If-Unmodified-Since` 使用
- 验证资源能否使用缓存 对比上次修改时间以验证资源是否需要更新
> Etag 数据签名
- 对资源内容进行hash计算
- 配合 `If-Match` 或者 `If-Non-Match` 使用
- 对比资源的签名判断是否使用缓存

### Cookie
> 通过Set-Cookie设置 下次请求会自动带上， 价值对形式，可以设置很多个
> 属性
- max-age和expires设置过期时间
- Secure只在https的时候发送
- HttpOnly无法通过document.cookie访问
- 浏览器关闭后，cookie自动删除

### 长连接 Connection
- keep-alive/close
- Chrome里面有6个并发的链接 会复用tcp ip的链接
- http请求是在tcp连接上发送的，一个tcp链接可以发送多个http请求
- http1.1里面，http请求要在tcp上面进行发送他是有先后顺序的，http2上可以一个tcp链接上并发多个http请求

### 数据协商
> 请求 Accept
- Accept 想要的数据类型
- Accept-Encoding 数据编码方式
- Accept-Language 接收语言
- User-Agent 用户端浏览器

> 服务端 Content
- Content-Type - `application/json`
- `Content-Encoding` 对应 `Accept-Encoding`

### Redirect
- 302 从a地址暂时跳转到某个地址，下次请求a地址时可能汇编
- 301 从a地址永久跳转到指定地址
 
### Content-Security-Policy 内容安全策略
> 作用
- 限制资源获取
- 报告资源获取越权
> 限制方式
- default-src 限制全局
- 指定资源类型 xxx-src



### Nginx 的配置
> 1，在node环境下起一个localhost 端口号为8888的服务 如base目录下
> 2，在对应`host`文件下加入 `test.com  127.0.0.1`
> 3，在nginx目录下新建`servers`文件并在其中加入 `test.conf`文件，配置如下
```
# 设置缓存路径 cache     #levels是否创建二级文件夹 #keys_zone：名字 声明内存大小为10M来进行缓存
proxy_cache_path cache levels=1:2 keys_zone=my_cache:10m
server {
       listen       80;
       server_name  test.com;
       location / {
           proxy_pass   http://127.0.0.1:8888;
           // 这样 一个物理机器可以跑多个不同的服务，就节省了资源
           proxy_set_header Host $host; // 值为test.com;而不是http://127.0.0.1:8888;
       }
}

```
> 4，然后启动nginx，在浏览器中访问test.com地址，即可看见代理转发的地址



### HTTPS ：HTTP-Security
    意为安全的http

### HTTP2的优势
- 信道复用
- 分帧传输 并发发送请求
- Server Push （Chrome里的并发链接数为6个）（浏览器可以主动为用户报告情况，发送请求）

### Nginx配置HTTP2
详情见 http://blog.poetries.top/handbook/html/%E6%9C%8D%E5%8A%A1%E7%AB%AF/Nginx.html
```
proxy_cache_path cache levels=1:2 keys_zone=my_cache:10m
server {
       listen       443 http2;
       server_name  test.com;
       http2_push_preload on;

       ssl on;
       ssl_certificate_key `path1`
       ssl_certificate `path2`
       location / {
           proxy_cache my_cache;
           proxy_pass   http://127.0.0.1:8888;
           // 这样 一个物理机器可以跑多个不同的服务，就节省了资源
           proxy_set_header Host $host; // 值为test.com;而不是http://127.0.0.1:8888;
           add_header Strict-Transport-Security max-age=200
       }
}

```
