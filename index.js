const http=require("http");

const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.write("i am in the home page")
        // res.send("<h1> Helloo i am in the home page</h1>");
        res.end();
    }
    
//   console.log(req)
    // res.writeHead(200,{'Content-Type':'text/html'});
    // res.write("I am running ")
    // res.end()
    else if (req.method==='GET' && req.url==="/about") {
        res.write(JSON.stringify(["hello you are in the about page",25,45,565,7]));
        res.end()
    }

    // else if(req.url==="/contact"){
    //     res.render("contact.html")
    // }
    else if(req.method==="GET" && req.url==="/contactUs"){
        res.write(JSON.stringify(["Hey man You are in the ContactUs page.You have any doubts can contactUs"]));
        res.end()
    }
    else if(req.method==="GET" && req.url==="/login"){
        res.write(" Hey Thank You .You are login")
        res.end();
    }
    else if(req.method==="GET" && req.url==="/logout"){
        // res.writeHead("Hey you are log out")
        res.write("You are log out")
        res.end();
    }
});
server.listen(8080);



