
## AJAX (async javascript adn xml)
- xml: 可扩展的标记语言，作用是用来存储数据的
- 
- ajax之所以称为异步的js和xml，主要原因是：当初最开始用ajax实现客户端和服务器端数据通信的时候，传输的数据格式一般都是xml格式的数据，我们把它成为异步的js和xml(现在一般都是基于json格式来进行数据传输)


## 异步js
- 这里的异步不是说ajax只能基于异步请求，这里的异步特指的是“局部刷新”

- 局部刷新 vs 全局刷新
- 在非完全前后端分离的项目中，前端开发只需要完成页面的制作，并且把一些基础的人机交互效果用js完成即可，页面中需要动态呈现内容的部分,都是交给后台做数据绑定
- 都交给服务器端做数据渲染,服务器的压力太大,如果服务器处理不过来,页面呈现速度更慢

- 前后端分离之后,前后端都不需要考虑各自的技术
- 可以同时进行开发,项目开发开始,首先制定前后端交互的接口文档,后台吧接口先写好,客户端按接口调取即可,后台再次去实现接口功能即可

### 基于原生JS实现AJAX
```javascript
let xhr = new XMLHttpRequest(); //不兼容ie6及更低版本
xhr.open([method],[url],[async],[username],[userpassword]);
// => 监听ajax状态改变， 获取响应信息(获取响应头信息、获取响应主体信息)
xhr.onreadystatechange = ()=>{
    if(xhr.readyState === 4 && xhr.status === 200){
        let result = xhr.responseText //获取响应主体中的内容
    }
}
// 发送AJAX请求(括号中的内容即为请求主体的内容)
xhr.send(null);

```
--- 
** `分析第二步中的细节点` **

> [ajax请求方式]
> 1、GET系列的请求(获取)
>- get
>- delete
>- head
>- ...
> 2、POST系列请求(推送)
>- post
>- put
>- ...
> 不管哪一种请求方式,客户端都可以吧信息传递给服务器,服务器也可以吧信息返回给客户端,只是GET系列一般以获取为主,而POST系列一般以推送为主
>
>GET系列请求和POST系列请求的区别
>1、GET请求传递给服务器内容一般都是基于`url地址问好传递参数`来实现的，而POST请求一般都是基于`设置请求主体`来实现的。各浏览器都以自己的关于URL最大长度的限制（谷歌：8kb、火狐：7kb、IE：2kb。。。）超过限制长度的部分，浏览器会自动截取掉，导致传递给服务器的数据缺失
>理论上POST请求通过请求主体传递是没有大小限制的,真是项目中为了保证传输的速率,我们也会限制大小(例如:上传的资料或者图片我们会做大小限制)
>
>2、GET 请求很容易出现缓存，而POST不会出现缓存（除非做特出处理）；
>原因：GET是通过URL问好传参传递给服务器信息，而POST是设置请求主体
>设置请求主体不会出现缓存，但是URL传递参数就会出现缓存
>URL: 请求地址
>ASYNC: true/false是否异步 默认为false
>username和userpassword一般不用，如果你请求的url地址所在的服务器设定了访问权限，则需要我们提供可通行的用户名和密码才可以（一般服务器都是可以允许匿名访问的）

---
** `第三步细节研究` **
```javascript
let xhr = new XMLHttpRequest(); //不兼容ie6及更低版本
// console.dir(xhr)
xhr.open([method],[url],[async],[username],[userpassword]);
// => 监听ajax状态改变， 获取响应信息(获取响应头信息、获取响应主体信息)
xhr.onreadystatechange = ()=>{
    if(xhr.readyState === 4 && xhr.status === 200){
        let result = xhr.responseText //获取响应主体中的内容
    }
}
// 发送AJAX请求(括号中的内容即为请求主体的内容)
xhr.send(null);

```
>AJAX状态码:描述当前AJAX操作的状态
>xhr.readyState
>
>0:UNSENT 未发送,只要创建一个AJAX对象,默认值就是0
>1:OPENED 我们已经执行了xhr.open这个操作
>2:HEADERS_RECEIVED 当前AJAX的请求已经发送，并且已经接收到服务器端返回的响应头信息了
>3:LOADING 响应主体内容正在返回的路上
>4:DONE 响应主体内容已经返回到客户端
---
>HTTP网络状态码：记录了当前服务器返回信息的状态xhr.status
>200: 一个完整的HTTP事务完成（以2开头的状态码一般都是成功）
>
>301: Moved Permanently 永久转移（永久重定向）
>302: Move temporarily 临时转移（临时重定向，新的HTTP版本中任务307是临时重定向）
>304: Not Modified 从浏览器缓存中获取数据`把一些不经常更新的文件或者内容缓存到浏览器中,下一次从缓存中获取,减轻服务器压力,也提到页面加载速度`
>
>以4开头的
>400: 请求参数错误
>401: 无权限访问
>404: 访问地址不存在
>
>以5开头的,一般都是失败,而且服务器的问题偏大
>500: Internal Server Error 未知的服务器错误
>503: Service UNAV阿里able服务器超负载
---
> AJAX中总共支持几个方法
>- [属性]
>- readyState: 存储的是当前AJAX的状态码
>- response/reponseText/responseXML: 都是用来接收服务器返回的响应主体中的内容，只是根据服务器返回的内容的格式不一样，我们使用不同的属性接收即可
> + responseText是最常用的，接收到的结果是字符串格式的
> + responseXML偶尔会用到，如果服务器端返回的是XML文档数据，我们需要使用这个属性接收
>- status: 记录了服务器端返回的HTTP状态码
>- statusText: 对返回状态码的描述
>- timeout: 设置当前AJAX请求的超时时间，假设我们设置时间为300（ms），从AJAX请求发送开始，3秒后主体内容还没有返回，浏览器会把当前AJAX请求任务强制断开
> [方法]
>- abort():强制终端AJAX请求
>- getAllResponseHeaders(): 获取全部的响应头信息(获取的结果是一堆字符串文本)
>- getResponseHeader(key): 获取制定属性名的响应头信息,例如xhr.getTesponseHeader('date')获取响应头中存储的服务器时间
>- open(): 打开一个URL地址
>- overrideMimeType(): 重写数据的MIME类型
>- send(): 发送AJAX请求（括号中书协的内容是客户端基于请求主体把信息传递给服务器）
>- setRequestHeader(key,value): 设置请求头信息（可以是设置的自定义请求头信息）
>- 
>- [事件]
>- onabort: 当AJAX被中断请求触发这个事件
>- onreadystatechange: AJAX状态发生改变，会触发这个事件
>- ontimeout: 当AJAX请求超时，会触发这个事件
>- 。。。


### js中常用的编码解码方法
> 正常的编码解码
>
>1、escape/unescape: 主要就是把中文汉字进行编码和解码的
> 
> 2、encodeURL/decodeURL:基本上所有的编程语言都支持
>
> 3、encodeURIComponent/decodeURICompent
> escape() will not encode: @*/+
>
> encodeURI() will not encode: ~!@#$&*()=:/,;?+'
>
> encodeURIComponent() will not encode: ~!*()'
>
> 也可以通过加密的方法进行编码解码
> 1 可逆转加密
> 2 不可逆转加密
> 





