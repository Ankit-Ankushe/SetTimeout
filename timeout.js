function console1() {
    console.log("1");
  }
  
  function print1() {
    setTimeout(console1, 1000);
  }
  
  function print2() {
    console.log("2");
  }
  
  // TO print the code in sync way I will add this code
  print1()
  setTimeout(print2,2000)