let http = require('http');
let url = require('url');
let util = require('util');
let fs = require('fs');


// 创建服务
let server = http.createServer((req,res)=>{

    res.statusCode = 200;

    res.setHeader("Content-Type","text/plain; charset=utf-8");

    // req.url 取到地址
    // url.parse 解析地址
    // util.inspect 解析、展开对象
    //let myUrl = util.inspect(url.parse(req.url));

    let pathname = url.parse(req.url).pathname;

    
    fs.readFile(pathname.substring(1),(err,data)=>{
        if(err){
            res.writeHead(404,{
                'Content-Type':'text/html'
            });
        }else{
            res.writeHead(200,{
                'Content-type':'text/html'
            });

            res.write(data.toString());
        }
        
        res.end();
    });

});

server.listen(3000, '127.0.0.1', ()=>{
    console.log("服务器已经运行");
});
