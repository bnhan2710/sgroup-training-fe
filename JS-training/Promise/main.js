  // console.log(1);
  // setTimeout(function() {
  //   console.log(2); // cv 1
  //   setTimeout(function() {
  //     console.log(3);// 
  //     setTimeout(function() {
  //       console.log(4);
  //     }, 1000);
  //   }, 1000);
  // }, 1000);
  // setTimeout(function() {
  //   console.log(3);
  // }, 1000);
  // setTimeout(function() {
  //   console.log(4);
  // }, 1000);
// function test() {
//   console.log(1);
//   // setTimeout(function() {
//   //   console.log(2);
//   // }, 1000);
//   console.log(3);
// }


const promise = new Promise(
    // excutor
    function(resolve, reject) {
      // logic
      // resolve("hiii")
      reject()
    }
  )
  
  promise
    .then(function(value) {
      console.log("success", value)
      return new Promise( function(resolve, reject) {
        resolve("jijji")
      })
    })
    .catch(function() {
      console.log("err")
    })
    .then(function(value) {
      console.log("success", value)
    })
   
  
  
  setTimeout(() => {
    let i = 0
    console.log(i)
    setTimeout(() => {
        console.log(i+1)
        setTimeout(() => {
            console.log(i+2)
            setTimeout(() => {
                console.log(i+3)
              }, 1000)
          }, 1000)
      }, 1000)
  }, 5000);
    
  
  
  new Promise(function(resolve, reject) {
    return resolve()
  })
  .then(function() {
    setTimeout(function() {
      console.log(1)
    }, 1000)
  })
  .then(function() {
    setTimeout(function() {
      console.log(2)
    }, 1000)
  })
  .then(function() {
    setTimeout(function() {
      console.log(3)
    }, 1000)
  })
  .then(function() {
    setTimeout(function() {
      console.log(4)
    }, 1000)
  })
  
  

  
  // //callback hell
  // setTimeout(function() {
  //   console.log('1'); //viec 1
  //     setTimeout(function() {
  //       console.log('2'); //viec 2
  //   }, 1000);
  // }, 1000);
  
  
  // const promise2 = function test1(name) {
  //   return new Promise((resolve, reject) => {
  //       resolve(name);
  //   });
  // }
  
  // promise2('test1').then((val) => {
  //   console.log(val);
  // })