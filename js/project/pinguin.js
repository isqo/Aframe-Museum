var elements = document.getElementsByClassName("point");
var myTimer = 0;
var index = 0;
recursivefunction(elements);
function recursivefunction(elements)
{
  //clearInterval(myTimer);
  var target = elements[index];
  var orientation = 1;
  var zdirection = 1;
  var xdirection = 1;
  var xbool = false;
  var zbool = false;
  var orbool = true;
  var xpas = 0.05;
  var zpas = 0.05;
  var boolpas = true;
  var Tux = document.querySelector('#Tux');
  Tux.removeAttribute("look-at");
  var ztarget = target.getAttribute("position").z;
  var xtarget = target.getAttribute("position").x;
  var x = Tux.getAttribute("position").x;
  var z = Tux.getAttribute("position").z;
  //
  // var angleplus = ztarget > z? -180 : 0;
  myTimer = setInterval(function(){

    var Tux = document.querySelector('#Tux');
    var xtarget = target.getAttribute("position").x;
    var x = Tux.getAttribute("position").x;
    var ztarget = target.getAttribute("position").z;
    var z = Tux.getAttribute("position").z;
    var tangangle=(xtarget - x)/(ztarget - z);
    var angleplus = ztarget >= z? -180 : 0;


  var angle = Math.atan(tangangle) * 180/Math.PI + angleplus;
  angle+=180;
    zdirection = ztarget > z? 1 : -1;
    xdirection = xtarget > x? 1 : -1;

    if(orbool){
      orientation = angle > Tux.getAttribute("rotation").y ? 1 : -1;
      orbool = false;
    }



//
// if(boolpas)
// {
//
//   if(Math.abs(xtarget) > Math.abs(ztarget)){
//     xpas=0.05;
//     zpas=0.05/((Math.abs(xtarget)+ Math.abs(x)) /(Math.abs(ztarget) + Math.abs(z)));
//   }
//   else {
//     zpas=0.05;
//     xpas=0.05/((Math.abs(ztarget)+ Math.abs(z))/(Math.abs(xtarget) + Math.abs(x)));
//   }
//   boolpas = false;
// }



    var y_rotation = Tux.getAttribute("rotation").y + 5*orientation;

    if((y_rotation <= angle && orientation == -1) ||(y_rotation >= angle && orientation == 1) || angle == 0)
       y_rotation = angle;

    var z_position = Tux.getAttribute("position").z + zdirection*zpas;

    if((z_position > ztarget && zdirection == 1) || (z_position < ztarget && zdirection == -1))
    {
       z_position = ztarget;
       zbool = true;
    }
    var x_position = Tux.getAttribute("position").x + xdirection*xpas;
    if((x_position > xtarget && xdirection == 1) || (x_position < xtarget && xdirection == -1))
    {
       x_position = xtarget;
      xbool = true;
    }

   if(zbool && xbool)
   {
      index++;
      if(index < elements.length)
      {
        if(index > 4)
                Tux.setAttribute("look-at","#lookat2");
                else {
                    Tux.setAttribute("look-at","#lookat");
                }
        setTimeout(function() {
        recursivefunction(elements);

        }, 5000);
        clearInterval(myTimer);

      }
      else {
        if(index > 4)
                Tux.setAttribute("look-at","#lookat2");
                else {
                    Tux.setAttribute("look-at","#lookat");
                }
          clearInterval(myTimer);
      }
   }

    Tux.setAttribute('rotation', {x:0,y:y_rotation,z:0});

    if((y_rotation <= angle && orientation == -1) ||(y_rotation >= angle && orientation == 1) || angle == 0)
      Tux.setAttribute('position', {x:x_position,y:Tux.getAttribute("position").y,z:z_position});

  }, 50);
  }
