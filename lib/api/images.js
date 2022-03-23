export const getImage =async({id})=>{
    try{
        
            const res = await fetch(`https://tourism100-server.herokuapp.com/images?id=${id}`,{
            method:"get",
            headers:{"Content-Type" :"application/json"},
        })
            return res.json()
        }

    catch(err){
        return err
    }
}

export const getWishList =async(id)=>{
    try{
        const res = await fetch(`https://tourism100-server.herokuapp.com/images/wishlist?id=${id}`,{
            method:"get",
            headers:{"Content-Type" :"application/json"},
        })
        return res.json()
    }
    catch(err){
        return err
    }
}

export const pushToWishList =async({id,image})=>{
    if(id && image){
        try{
            const res = await fetch(`https://tourism100-server.herokuapp.com/images/wishlist/add?id=${id}`,{
                method:"post",
                headers:{"Content-Type" :"application/json"},
                body:JSON.stringify(image)
            })
            return res.json()
        }
        catch(err){
            return err
        }
    }
    else{
        return {
            statu:'failed',
            message:"Authentication error"
        }
    }
}

export const getVisitedById =async(id)=>{
    if(id){
        try{
            const res = await fetch(`https://tourism100-server.herokuapp.com/images/visited?id=${id}`,{
                method:"get",
                headers:{"Content-Type" :"application/json"},
            })
            return res.json()
        }
        catch(err){
            return err
        }
    }
    else{
        return{
            status:'failed',
            message:"Authentication error"
        }
    }
}

export const getRandomImageByTags =async({tags,id})=>{
    console.log(id,tags)
    if(tags){
        try{
            const res = await fetch(`https://tourism100-server.herokuapp.com/images?tag=${tags}&id=${id}`,{
            method:"get",
            headers:{"Content-Type" :"application/json"},
        })
        return res.json()
        }catch(err){
            return {
                status:'failed',
                message:err.message
            }
        }
    }
    else{
        return {
            status:'failed',
            message:"Tags cannot be empty"
        }
    }
}