
const http = new Http();

console.log(undefined === null);

(async () => {
    const res = await http.get('http://localhost:3000');
    if(res === null){
        console.log('Petición incorrecta');
    }else{
        res.then(res => res.json())
        .then(data => console.log(data));
    }
})();
