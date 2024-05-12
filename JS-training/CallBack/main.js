function todo(work) {
    if (typeof work === 'function')
    {
      work()
    } else {
      console.log("this is type:", typeof work)
    }
  }
  
  
  todo(function () {
    console.log("hello")
  })
  
  
  function findIndex(fn) {
    //....
    let result = fn(a[i])
  }
  let arr = [1,2,3,4]
  let a = "123"
  console.log(Array.prototype)
  
  
  
  
  
  
  
  // function myFunction (param) {
  //   // console.log(typeof param)
  //   if (typeof param === 'function') {
  //     param(123)
  //   }
  // }
  
  // function myCallback (value) {
  //   console.log('im a callback', value)
  // }
  // // myCallback(123)
  // // myFunction(myCallback)