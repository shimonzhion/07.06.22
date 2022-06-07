// function printTimer (){
//     setInterval(()=>{
//        text1.innerHTML += "timer <br>"
//     },4000)
// }
//  printTimer()

// var counter = 0
// function printCounter(){
//     setInterval(()=>{
//         text2.innerHTML += counter++ +"<br>"
       
        
//     },6000)

// }
// printCounter()
var IntervalId ;
// function printI_Love_Timers(){
//   IntervalId =  setInterval(()=>{
//         text3.innerHTML += "I love timers <br>"
  
//     },5000)
// }

// printI_Love_Timers()

// function stopprint (){
//     clearInterval(IntervalId)
// }


// function printDate (){


//    IntervalId = setInterval(()=>{
//     var d = new Date();
//     var s = d.getSeconds();
//     var m = d.getMinutes();
//     var h = d.getHours();
//         text3.innerHTML += ("0" + h).substr(-2) +":" +("0" + m).substr(-2) +":" +("0" + s).substr(-2) +"<br>";
    
//     },1000)
 
// }
// printDate ()
 function min () {
    var minute = min_input.value -1;
    var sec = 59;
    setInterval(function() {
        if (minute < 0){
            return text5.innerHTML= "game over"
        }


         text5.innerHTML = minute + " : " + sec;
      sec--;
    
     
  
        if(sec==0){
   
        minute --
        sec=59
        }
     
    }, 1000);
    
  }

