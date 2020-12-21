
class Http{

    constructor(){
        
    }

    async get(url){
        try{
            const res = await fetch(url);
            return res;
        }catch(error){
            console.error('errorcillo', error);
            return null;
        }
    }
}