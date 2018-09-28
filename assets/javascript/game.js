
window.onload = function() {

    
   
    $("#start").click(stopwatch.start);
  };
  
  //  Variable that will hold our setInterval that runs the stopwatch
  var intervalId;
  
  // prevents the clock from being sped up unnecessarily
  var clockRunning = false;
  
  //  Our stopwatch object.
  var stopwatch = {
  
    time: 0,
    lap: 1,
  
    reset: function() {
  
      stopwatch.time = 0;
      
  
      
      $('#display').text("00:00")
    },
  
    start: function() {
  
      //  TODO: Use setInterval to start the count here and set the clock to running.
      if (!clockRunning) {
        intervalId = setInterval(stopwatch.count,1000);
        clockRunning = true;
  
      }
      
    },
    stop: function() {
        if (seconds==30){
            clearInterval(intervalId);
            clockRunning = false;
            
          }
    },
  
   
    count: function() {
      console.log("tick!")
      //  TODO: increment time by 1, remember we cant use "this" here.
      stopwatch.time++;
      //  TODO: Get the current time, pass that into the stopwatch.timeConverter function,
      //        and save the result in a variable.
      const formattedTime = stopwatch.timeConverter(stopwatch.time)
      //  TODO: Use the variable you just created to show the converted time in the "display" div.
      $("#display").text(formattedTime);
    },
  
   
  
    timeConverter: function(t) {
  
      //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
      var minutes = Math.floor(t / 60);
      var seconds = t - (minutes * 60);
  
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
  
      if (minutes === 0) {
        minutes = "00";
      }
  
      else if (minutes < 10) {
        minutes = "0" + minutes;
      }
  
      return minutes + ":" + seconds;
    }
  };
  
  