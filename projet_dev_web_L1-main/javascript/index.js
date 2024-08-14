function printSection() 
{

  var sectionToPrint=document.getElementById('section');

  var newWin=window.open('','Cv');

  //newWin.document.open();

  newWin.document.write(' <html><head><link rel="stylesheet" href="../CSS/printcss.css"/> </head> <body onload="window.print()">'+sectionToPrint.innerHTML+'</body></html>');

  newWin.document.close();

  //setTimeout(function(){newWin.close();},10);

}
function refreshTime() {
  const timeDisplay = document.getElementById("date");
  const dateString = new Date().toLocaleTimeString();
 // const formattedString = dateString.replace(", ", " - ");
//  timeDisplay.textContent = formattedString;
  timeDisplay.textContent= dateString;
  
}
  setInterval(refreshTime, 1000);