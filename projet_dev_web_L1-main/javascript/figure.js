function razPt(x0,y0,x1,y1,x2,y2,x3,y3,dimPt)
{
    var cnv= document.getElementById("canvas1");
    var cont=cnv.getContext("2d");
    cont.clearRect(x0-dimPt/2,y0-dimPt/2,dimPt+1,dimPt+1);
    cont.clearRect(x1-dimPt/2,y1-dimPt/2,dimPt+1,dimPt+1) ;
    cont.clearRect(x2-dimPt/2,y2-dimPt/2,dimPt+1,dimPt+1) ;
    cont.clearRect(x3-dimPt/2,y3-dimPt/2,dimPt+1,dimPt+1) ;

}
// function razCBe(){
//     var cnv= document.getElementById("canvas1");
//     var cont=cnv.getContext("2d");
//     cont.clearRect(0,0,cnv.clientWidth,cnv.clientHeight);
// }
function aff(val){
    switch(val){
        case 'Pt': 
        var x0=document.getElementById("x0").value;
        var y0=document.getElementById("y0").value;
        var x1=document.getElementById("x1").value;
        var y1=document.getElementById("y1").value;
        var x2=document.getElementById("x2").value;
        var y2=document.getElementById("y2").value;
        var x3=document.getElementById("x3").value;
        var y3=document.getElementById("y3").value;
        var coul=document.getElementById("coul").value;
        var dimPt=document.getElementById("dimPt").value;
        if(document.getElementById("check").checked==true){
           
        affichage(x0,y0,x1,y1,x2,y2,x3,y3,coul,0,0,0,dimPt,false,false,true);// à l'appelle la fonction n'utilisera que ceux dont ellel a besoin donc on peut initialisé le reste avec n'importe quelle valeur 
        }else{
            razPt(x0,y0,x1,y1,x2,y2,x3,y3,dimPt); 
        }
        break;
        case 'Cbe':
             
            if(document.getElementById("Cbe").checked==true){
            var x0=document.getElementById("x0").value;
            var y0=document.getElementById("y0").value;
            var x1=document.getElementById("x1").value;
            var y1=document.getElementById("y1").value;
            var x2=document.getElementById("x2").value;
            var y2=document.getElementById("y2").value;
            var x3=document.getElementById("x3").value;
            var y3=document.getElementById("y3").value;
            var coul=document.getElementById("coulc").value;
            var epai=document.getElementById("epaic").value;
            affichage(x0,y0,x1,y1,x2,y2,x3,y3,coul,epai,0,0,0,true,false,false);// à l'appelle la fonction n'utilisera que ceux dont ellel a besoin donc on peut initialisé le reste avec n'importe quelle valeur 
            
            }else{
                razCBe(); 
            }
            break;
    }
}

function tracePt(x0,y0,coul,dimPt){
    var cnv= document.getElementById("canvas1");
    var cont=cnv.getContext("2d");
    cont.fillStyle=coul;
    cont.fillRect(x0-dimPt/2,y0-dimPt/2,dimPt,dimPt);
}

function TracePolygone(xA,yA,xB,yB,xC,yC,xD,yD,coul,epai){
    var cnv= document.getElementById("canvas");
    var cont=cnv.getContext("2d");
    cont.strokeStyle=coul;
    cont.lineWidth=epai;
    cont.moveTo(xA,yA);
    cont.lineTo(xB,yB);
    cont.moveTo(xB,yB);
    cont.lineTo(xC,yC);
    cont.moveTo(xC,yC);
    cont.lineTo(xD,yD);
    cont.moveTo(xD,yD);
    cont.lineTo(xA,yA);
    cont.stroke();
}
function   TracBez3(xP0,yP0,xP1,yP1,xP2,yP2,xP3,yP3,coul,epai){
    var cnv= document.getElementById("canvas1");
    var cont=cnv.getContext("2d");
    cont.strokeStyle=coul;
    cont.lineWidth=epai;
    cont.moveTo(xP0,yP0);
    cont.bezierCurveTo(xP1,yP1,xP2,yP2,xP3,yP3);
    cont.stroke();
}
function affichage(xP0,yP0,xP1,yP1,xP2,yP2,xP3,yP3,coul,epai,coulS,epaiS,dimPt,bolCbe,bolSeg,bolPt){
if(bolCbe){
    TracBez3(xP0,yP0,xP1,yP1,xP2,yP2,xP3,yP3,coul,epai);
}
if(bolPt){
    tracePt(xP0,yP0,coul,dimPt);
    tracePt(xP1,yP1,coul,dimPt);
    tracePt(xP2,yP2,coul,dimPt);
    tracePt(xP3,yP3,coul,dimPt);

}
if(bolSeg){
    TracePolygone(xA,yA,xB,yB,xC,yC,xD,yD,coulS,epai);
}
}

function construire(){
    
    var cnv= document.getElementById("canvas1"); 
    var cont2d= cnv.getContext("2d");

//construiction du ciel
    cont2d.beginPath();
    cont2d.fillStyle="hsl(190, 53%, 85%)";
    cont2d.fillRect(0,0,cnv.width,200)
    cont2d.closePath();
    //construiction du bateux et de la tige du voilier
    cont2d.beginPath();
    cont2d.strokeStyle="#222222";
    cont2d.fillStyle="black";
    cont2d.lineWidth=7;
    cont2d.moveTo(200,300);
    cont2d.lineTo(300,550);
    cont2d.moveTo(300,550);
    cont2d.lineTo(900,550);
    cont2d.moveTo(900,550);
    cont2d.lineTo(1000,300);
    cont2d.moveTo(1000,300);
    cont2d.quadraticCurveTo(600,500,200,300);
    cont2d.moveTo(1000,300);
    cont2d.quadraticCurveTo(600,450,200,300);
    cont2d.stroke();
    cont2d.fillRect(600,10,10,390); 
    cont2d.closePath();
 
    //construiction de l'arc du voilier(courbe de besier degree 2)
    cont2d.beginPath();
    cont2d.fillStyle="#DD0000";
    cont2d.strokeStyle="#111111";
    cont2d.lineWidth=4;
    cont2d.moveTo(600,10);
    cont2d.quadraticCurveTo(300,420,600,400);
    cont2d.fill();
    cont2d.stroke();
    cont2d.closePath();

    //construiction des  4 cercles rouges 
    cont2d.beginPath();
    cont2d.fillStyle="#DD0000";
    cont2d.lineWidth=4;
    cont2d.strokeStyle="black";
    cont2d.arc(870,450,30,0,2*Math.PI,true);
    cont2d.stroke();
    cont2d.fill();
    cont2d.closePath();

    cont2d.beginPath();
    cont2d.fillStyle="#DD0000";
    cont2d.lineWidth=4;
    cont2d.strokeStyle="black";
    cont2d.arc(750,480,30,0,2*Math.PI,true);
    cont2d.stroke();
    cont2d.fill();
    cont2d.closePath();

    cont2d.beginPath();
    cont2d.fillStyle="#DD0000";
    cont2d.lineWidth=4;
    cont2d.strokeStyle="black";
    cont2d.arc(450,480,30,0,2*Math.PI,true);
    cont2d.stroke();
    cont2d.fill();
    cont2d.closePath();

    cont2d.beginPath();
    cont2d.fillStyle="#DD0000";
    cont2d.lineWidth=4;
    cont2d.strokeStyle="black";
    cont2d.arc(330,450,30,0,2*Math.PI,true);
    cont2d.stroke();
    cont2d.fill();
    cont2d.closePath();

    //construiction de la mer (courbe de besier degree 3)

    //côté gauche
    cont2d.beginPath();
    cont2d.strokeStyle="#4040FF";
    cont2d.lineWidth=6;
    cont2d.moveTo(20,500);
    cont2d.bezierCurveTo(80,452,200,520,260,500);
    cont2d.stroke();
    cont2d.closePath();

    cont2d.beginPath();
    cont2d.strokeStyle="#4040FF";
    cont2d.lineWidth=6;
    cont2d.moveTo(20,550);
    cont2d.bezierCurveTo(80,502,200,570,260,550);
    cont2d.stroke();
    cont2d.closePath();
    
    cont2d.beginPath();
    cont2d.strokeStyle="#4040FF";
    cont2d.lineWidth=6;
    cont2d.moveTo(20,600);
    cont2d.bezierCurveTo(80,552,200,620,260,600);
    cont2d.stroke();
    cont2d.closePath();

    cont2d.beginPath();
    cont2d.strokeStyle="#4040FF";
    cont2d.lineWidth=6;
    cont2d.moveTo(20,650);
    cont2d.bezierCurveTo(80,602,200,670,260,650);
    cont2d.stroke();
    cont2d.closePath();

    //côté droite
    cont2d.beginPath();
    cont2d.strokeStyle="#4040FF";
    cont2d.lineWidth=6;
    cont2d.moveTo(950,500);
    cont2d.bezierCurveTo(1030,452,1070,520,1190,500);
    cont2d.stroke();
    cont2d.closePath();

    cont2d.beginPath();
    cont2d.strokeStyle="#4040FF";
    cont2d.lineWidth=6;
    cont2d.moveTo(950,550);
    cont2d.bezierCurveTo(1030,502,1070,570,1190,550);
    cont2d.stroke();
    cont2d.closePath();
    
    cont2d.beginPath();
    cont2d.strokeStyle="#4040FF";
    cont2d.lineWidth=6;
    cont2d.moveTo(950,600);
    cont2d.bezierCurveTo(1030,552,1070,620,1190,600);
    cont2d.stroke();
    cont2d.closePath();

    cont2d.beginPath();
    cont2d.strokeStyle="#4040FF";
    cont2d.lineWidth=6;
    cont2d.moveTo(950,650);
    cont2d.bezierCurveTo(1030,602,1070,670,1190,650);
    cont2d.stroke();
    cont2d.closePath();

    //vague du milieu
    cont2d.beginPath();
    cont2d.strokeStyle="#4040FF";
    cont2d.lineWidth=6;
    cont2d.moveTo(300,600);
    cont2d.bezierCurveTo(360,552,490,620,550,600);
    cont2d.stroke();
    cont2d.closePath();

    cont2d.beginPath();
    cont2d.strokeStyle="#4040FF";
    cont2d.lineWidth=6;
    cont2d.moveTo(300,650);
    cont2d.bezierCurveTo(360,602,490,670,550,650);
    cont2d.stroke();
    cont2d.closePath();

    cont2d.beginPath();
    cont2d.strokeStyle="#4040FF";
    cont2d.lineWidth=6;
    cont2d.moveTo(590,600);
    cont2d.bezierCurveTo(650,552,800,620,850,600);
    cont2d.stroke();
    cont2d.closePath();

    cont2d.beginPath();
    cont2d.strokeStyle="#4040FF";
    cont2d.lineWidth=6;
    cont2d.moveTo(590,650);
    cont2d.bezierCurveTo(650,602,800,670,850,650);
    cont2d.stroke();
    cont2d.closePath();

}
function coulBat(){
    var cnv= document.getElementById("canvas1"); 
    var cont2d= cnv.getContext("2d");

    cont2d.beginPath();
    cont2d.fillStyle= document.getElementById("coulB").value;
    cont2d.lineWidth=4;
    cont2d.moveTo(600,10);
    cont2d.quadraticCurveTo(300,420,600,400);
    cont2d.fill();
    cont2d.stroke();
    cont2d.closePath();

    cont2d.beginPath();
    cont2d.fillStyle=document.getElementById("coulB").value;
    cont2d.lineWidth=4;
    cont2d.strokeStyle="black";
    cont2d.arc(870,450,30,0,2*Math.PI,true);
    cont2d.stroke();
    cont2d.fill();
    cont2d.closePath();

    cont2d.beginPath();
    cont2d.fillStyle=document.getElementById("coulB").value;
    cont2d.lineWidth=4;
    cont2d.strokeStyle="black";
    cont2d.arc(750,480,30,0,2*Math.PI,true);
    cont2d.stroke();
    cont2d.fill();
    cont2d.closePath();

    cont2d.beginPath();
    cont2d.fillStyle=document.getElementById("coulB").value;
    cont2d.lineWidth=4;
    cont2d.strokeStyle="black";
    cont2d.arc(450,480,30,0,2*Math.PI,true);
    cont2d.stroke();
    cont2d.fill();
    cont2d.closePath();

    cont2d.beginPath();
    cont2d.fillStyle=document.getElementById("coulB").value;
    cont2d.lineWidth=4;
    cont2d.strokeStyle="black";
    cont2d.arc(330,450,30,0,2*Math.PI,true);
    cont2d.stroke();
    cont2d.fill();
    cont2d.closePath();
}
function changeCiel(){

      var cnv= document.getElementById("canvas1");
     var cont2d=cnv.getContext("2d");
      var index=document.forms["form1"].valCiel.selectedIndex;
      var valeur = document.forms["form1"].valCiel.options[index].value; 

      switch(valeur){
        case  "0": 
        cont2d.beginPath();
        cont2d.fillStyle="hsl(190, 53%, 85%)";
        cont2d.fillRect(0,0,cnv.width,200);
        cont2d.closePath();
        construireTige();
        coulBat();
        break;
        case  "1": 
        cont2d.beginPath();
        cont2d.fillStyle="rgb(201, 252, 247)";
        cont2d.fillRect(0,0,cnv.width,200);
        cont2d.closePath();
        construireTige();
        coulBat();
        break;
        case  "2":
            cont2d.beginPath();
            cont2d.fillStyle="rgb(228, 255, 252)";
            cont2d.fillRect(0,0,cnv.width,200);
            cont2d.closePath();
            construireTige();
            coulBat();
         break;
        case "-1":
            cont2d.beginPath();
            cont2d.fillStyle="rgb(67, 114, 188)";
            cont2d.fillRect(0,0,cnv.width,200);
            cont2d.closePath();
            construireTige();
            coulBat();
         break;
        case "-2":
            cont2d.beginPath();
            cont2d.fillStyle="rgb(42, 70, 115)";
            cont2d.fillRect(0,0,cnv.width,200);
            cont2d.closePath();
            construireTige();
            coulBat();

      }

} 

function construireTige(){
    var cnv= document.getElementById("canvas1"); 
    var cont2d= cnv.getContext("2d");
    //construiction du bateux et de la tige du voilier
    cont2d.beginPath();
    cont2d.fillStyle="black";
    cont2d.fillRect(600,10,10,390); 
    cont2d.closePath();
}

function affB(){
    var cnv= document.getElementById("canvas1"); 
    var cont2d= cnv.getContext("2d");
    if(document.getElementById("bateau").checked==true){
        cont2d.clearRect(195,0,810,480);
        cont2d.clearRect(265,450,667,110);
        reconSCiel();
    }else{
        construire();
    }
    
}

function reconSCiel(){
    
    var cnv= document.getElementById("canvas1");
    var cont2d=cnv.getContext("2d");
    var index=document.forms["form1"].valCiel.selectedIndex;
    var valeur = document.forms["form1"].valCiel.options[index].value; 

     switch(valeur){
       case  "0": 
       cont2d.beginPath();
       cont2d.fillStyle="hsl(190, 53%, 85%)";
       cont2d.fillRect(0,0,cnv.width,200);
       cont2d.closePath();
       break;
       case  "1": 
       cont2d.beginPath();
       cont2d.fillStyle="rgb(201, 252, 247)";
       cont2d.fillRect(0,0,cnv.width,200);
       cont2d.closePath();
    
       break;
       case  "2":
           cont2d.beginPath();
           cont2d.fillStyle="rgb(228, 255, 252)";
           cont2d.fillRect(0,0,cnv.width,200);
           cont2d.closePath();
         
        break;
       case "-1":
           cont2d.beginPath();
           cont2d.fillStyle="rgb(67, 114, 188)";
           cont2d.fillRect(0,0,cnv.width,200);
           cont2d.closePath();
     
        break;
       case "-2":
           cont2d.beginPath();
           cont2d.fillStyle="rgb(42, 70, 115)";
           cont2d.fillRect(0,0,cnv.width,200);
           cont2d.closePath();

     }

}

function affM(){
    var cnv= document.getElementById("canvas1"); 
    var cont2d= cnv.getContext("2d");
    if(document.getElementById("mer").checked==true){
        cont2d.clearRect(0,450,260,250);
        cont2d.clearRect(265,550,667,150);
        cont2d.clearRect(940,450,260,250);
    }else{
        construireMer();
    }
    
}
function construireMer(){
    var cnv= document.getElementById("canvas1"); 
    var cont2d= cnv.getContext("2d");
      //construiction de la mer (courbe de besier degree 3)

    //côté gauche
    cont2d.beginPath();
    cont2d.strokeStyle="#4040FF";
    cont2d.lineWidth=6;
    cont2d.moveTo(20,500);
    cont2d.bezierCurveTo(80,452,200,520,260,500);
    cont2d.stroke();
    cont2d.closePath();

    cont2d.beginPath();
    cont2d.strokeStyle="#4040FF";
    cont2d.lineWidth=6;
    cont2d.moveTo(20,550);
    cont2d.bezierCurveTo(80,502,200,570,260,550);
    cont2d.stroke();
    cont2d.closePath();
    
    cont2d.beginPath();
    cont2d.strokeStyle="#4040FF";
    cont2d.lineWidth=6;
    cont2d.moveTo(20,600);
    cont2d.bezierCurveTo(80,552,200,620,260,600);
    cont2d.stroke();
    cont2d.closePath();

    cont2d.beginPath();
    cont2d.strokeStyle="#4040FF";
    cont2d.lineWidth=6;
    cont2d.moveTo(20,650);
    cont2d.bezierCurveTo(80,602,200,670,260,650);
    cont2d.stroke();
    cont2d.closePath();

    //côté droite
    cont2d.beginPath();
    cont2d.strokeStyle="#4040FF";
    cont2d.lineWidth=6;
    cont2d.moveTo(950,500);
    cont2d.bezierCurveTo(1030,452,1070,520,1190,500);
    cont2d.stroke();
    cont2d.closePath();

    cont2d.beginPath();
    cont2d.strokeStyle="#4040FF";
    cont2d.lineWidth=6;
    cont2d.moveTo(950,550);
    cont2d.bezierCurveTo(1030,502,1070,570,1190,550);
    cont2d.stroke();
    cont2d.closePath();
    
    cont2d.beginPath();
    cont2d.strokeStyle="#4040FF";
    cont2d.lineWidth=6;
    cont2d.moveTo(950,600);
    cont2d.bezierCurveTo(1030,552,1070,620,1190,600);
    cont2d.stroke();
    cont2d.closePath();

    cont2d.beginPath();
    cont2d.strokeStyle="#4040FF";
    cont2d.lineWidth=6;
    cont2d.moveTo(950,650);
    cont2d.bezierCurveTo(1030,602,1070,670,1190,650);
    cont2d.stroke();
    cont2d.closePath();

    //vague du milieu
    cont2d.beginPath();
    cont2d.strokeStyle="#4040FF";
    cont2d.lineWidth=6;
    cont2d.moveTo(300,600);
    cont2d.bezierCurveTo(360,552,490,620,550,600);
    cont2d.stroke();
    cont2d.closePath();

    cont2d.beginPath();
    cont2d.strokeStyle="#4040FF";
    cont2d.lineWidth=6;
    cont2d.moveTo(300,650);
    cont2d.bezierCurveTo(360,602,490,670,550,650);
    cont2d.stroke();
    cont2d.closePath();

    cont2d.beginPath();
    cont2d.strokeStyle="#4040FF";
    cont2d.lineWidth=6;
    cont2d.moveTo(590,600);
    cont2d.bezierCurveTo(650,552,800,620,850,600);
    cont2d.stroke();
    cont2d.closePath();

    cont2d.beginPath();
    cont2d.strokeStyle="#4040FF";
    cont2d.lineWidth=6;
    cont2d.moveTo(590,650);
    cont2d.bezierCurveTo(650,602,800,670,850,650);
    cont2d.stroke();
    cont2d.closePath();
}