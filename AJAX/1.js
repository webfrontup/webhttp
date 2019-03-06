let xhr = new XMLHttpRequest();
xhr.open('get', 'temp.json?_='+ Math.random(),true);

// xhr.setRequestHeader('cookie','abc') 设置请求头信息必须在open之后send之前
xhr.timeout = 10;
xhr.ontimeout = ()=>{
    console.log('当前请求已经超时')
}

xhr.onreadystatechange = () => {
    let {readyState:state, status} = xhr;

    // => 说明请求数据成功了
    if(!/^(2|3)\d{2}$/.test(status)) return;

    // => 在状态为2的时候就可以获取响应头
    if(state === 2){
        let headerAll = xhr.getAllResponseHeaders(),
            serverDate = xhr.getResponseHeader('date')
        console.log(headerAll,serverDate)
        return;
    }
    // => 在状态为4的时候响应主体内容就已经回来了
    if(state === 4){
        // 获取到的结果一般都是JSON字符串
        let valueText = xhr.responseText,
        // 获取的结果是xml格式的数据
            valueXML = xhr.responseXML;
        
        console.log(valueText, valueXML)   
    }

}

xhr.send('name=zxt&age=28&sex=man')
