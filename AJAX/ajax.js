~function() {

    class ajaxClass{

        init(){
            let xhr = new XMLHttpRequest();
            xhr.onreadystatechange = () => {
                if(!/^[23]\d{2}$/.test(xhr.status)) return;
                if (xhr.readyState === 4) {
                    let result = xhr.responseText;
                    //=> DATA-TYPE
                    switch(this.dataType.toUpperCase()){
                        case "TEXT":
                        case "HTML":
                            break;
                        case "JSON":
                            result = JSON.parse(result)
                            break;
                        case "XML":
                            result = xhr.responseXML;
                    }
                    // => DATA 
                    if (this.data != null){
                        this.formatData()
                        if (this.isGET){
                            this.url += this.querySymbol() + this.data;
                            this.data = null;
                        }

                    }



                    // => CACHE
                    this.isGET ? this.cacheFn() : null;

                    this.success(result)
                }
                
            }
            xhr.open(this.method,this.url,this.async)

            xhr.send();
        }

        cacheFn() {
            !this.cache?this.url+`${this.querySymbol}_=${Math.random()}`:null;
        }
        
        querySymbol() {
            // => THIS: EXAMPLE
            return this.url.indexOf("?")>-1?'&':'?';
        }

        formatData() {
            if(Object.prototype.toString.call(this.data)==='[Object Object]'){
                let obj = this.data,str = ``;
                for(let key in obj) {
                    if(obj.hasOwnProperty(key)){
                        str += `${key}=${obj[key]}`;
                    }
                }
                str.replace(/&$/g,'');
                this.data = str;
            }
        }


    }

    window.ajax = function({
        url = null,
        method = "GET",
        type = "GET",
        data = null, 
        dateType = 'JSON',
        cache = true,
        async = true,
        success = null
    }={}){
        let _this =  new ajaxClass();
        ['url', 'method', 'data','dateType','cache','async','success'].forEach((item)=>{
            if(item === 'method'){
                _this.method = type === null?method:type;
                return
            }
            if(item === 'success'){
                _this.success = typeof success === 'function' ? success : new Function();
                return;
            }
            _this[item] = eval(item)
        })
        _this.isGET = /^(GET|DELETE|HEAD)$/i.test(_this.method);
        _this.init();
        // _this.url = url;
        // _this.method = type === null?method:type;
        // _this.data = data;
        // _this.dateType = dateType;
        // _this.cache = cache;
        // _this.async = async;
        return _this;
    }

}()
