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
- max-age: <secodes> 多久到期
- s-maxage: <secodes> 代理服务器缓存多久到期
- max-stale: <secodes> 发起请求这方主动代理的头
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

