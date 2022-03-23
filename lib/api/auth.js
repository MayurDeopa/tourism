export const login =async(data)=>{
    try{
        const res = await fetch('https://tourism100-server.herokuapp.com/auth/login',{
            method:"post",
            headers:{"Content-Type" :"application/json"},
            body:JSON.stringify({
                token:data
            })
        })
        return res.json()
    }
    catch(err){
        return err
    }
}

export const register =async(data)=>{
    const {username,password,email} = data
    if(email.length===0 || password.length===0 || username.length===0){
        return ({
            status:'failed',
            message:'Input field cannot be empty'
        })
    }
    try{
        const res = await fetch('https://tourism100-server.herokuapp.com/auth/register',{
            method:"post",
            headers:{"Content-Type" :"application/json"},
            body:JSON.stringify(data)
        })
        return res.json()
    }
    catch(err){
        return err
    }
}