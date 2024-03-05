var time =  document.getElementById('clock')
var date =  document.getElementById('date')

setInterval(()=>{

    var dattim = new Date();

    time.innerHTML = dattim.toLocaleTimeString();
    date.innerHTML = dattim.toDateString()

},1000)






