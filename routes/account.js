

var users=[
    {username:'admin',password:'123'},
    {username:'test1',password:'123'},
    {username:'test2',password:'123'},
    {username:'test3',password:'123'}
]

exports.regist =function(req,res,next){
    var username=req.query.username;
    var password=req.query.password;

    if(!username || !password){
        res.send({status:false, msg:"注册信息不全"});
        return;
    }

    for(var k=0;k<users.length;k++){
        if(users[k].username==username){
            res.send({status:false, msg:"用户名已存在"})
            return;
        }
    }

    users.push({username:username,password:password});
    res.send({status:true, msg:"注册成功"})
}

exports.login = function(req,res,next){
    var username=req.query.username;
    var password=req.query.password;
    for(var k=0;k<users.length;k++){
        if(users[k].username==username && users[k].password==password){
            res.send({status:true, msg:"登录成功"})
            return;
        }
    }
    res.send({status:false, msg:"登录失败"})
}