const http = require("http");
const port = 3000

const server = http.createServer(function(request,response){
    
})

server.listen(port,function(error){
    if(error){
        console.log("somethinf is wrong")
    }else{
        console.log("server is listening on port " + port)
    }
})


