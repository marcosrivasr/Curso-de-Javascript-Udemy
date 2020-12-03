//resolver todas las promesas

const p1 = new Promise((resolve, reject) => { 
    setTimeout(resolve, 1000, "uno"); 
}); 
const p2 = new Promise((resolve, reject) => { 
    setTimeout(resolve, 2000, "dos"); 
});
const p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "tres");
});
const p4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, "cuatro");
});
const p5 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, "cinco");
    //reject("reject");
});
  
Promise
  .all([p1, p2, p3, p4, p5])
  .then(values => { 
    console.log(values);
  }, error => {
    console.log(error)
  });
  
Promise
  .all([p1, p2, p3, p4, p5])
  .then(values => { 
    console.log(values);
  })
  .catch(reason => { 
    console.log(reason)
  });
