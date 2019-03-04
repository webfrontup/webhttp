
## web优化

- 减少http请求的次数或者减少请求数据
- 采用雪碧图
- css、js合并压缩
- 通信用json。。。
- preload = auto：页面首次加载就把音视频资源缓存
- preload = metadata：页面首次加载只把音视频资源头部信息进行加载
- css 选择器优化
> 1）尽量减少标签选择器的使用
> 2) 尽可能少使用ID选择器，多使用样式类选择器
> 3) 减少选择器前面的前缀。如 .A .B .C  a{} (选择器是从右向左查找的)
- 避免使用css表达式
- 减少也买呢冗余代码，尽可能提高方法的复用效率
- 最好css放在head中，js放在body尾部（先呈现页面给用户提供操作）
- 对于不经常更新的数据，最好采用浏览器的304缓存做处理
- 操作dom的时候，尽量使用事件委托来实现















