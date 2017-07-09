var speed = 0.5;
var index = 0;
var Tux = document.querySelector('#Tux');

function computeangle(character,target)
{
  var xtarget = target.getAttribute("position").x;
  var x = character.getAttribute("position").x;
  var ztarget = target.getAttribute("position").z;
  var z = character.getAttribute("position").z;

  var tangangle=(xtarget - x)/(ztarget - z);
  var compensation = ztarget >= z? -180 : 0;
  var angle = Math.atan(tangangle) * 180/Math.PI + compensation + 180;

  return angle;
}

function computexdirection(character,target)
{
  var xtarget = target.getAttribute("position").x;
  var x = character.getAttribute("position").x;
  return xtarget > x? 1 : -1;
}

function computezdirection(character,target)
{
  var ztarget = target.getAttribute("position").z;
  var z = character.getAttribute("position").z;
  return  ztarget > z? 1 : -1;
}

function movethepinguin(elements)
{
  Tux.removeAttribute("look-at");
  var target = elements[index];
  var lookat = "#"+target.getAttribute("lookat");
  var waiting = target.getAttribute("waiting");
  var teleportation = (target.getAttribute("teleportation") === 'true');
  var xarrived = false,zarrived = false;
  var xpas = speed,zpas = speed;
  var zdirection = 0,xdirection = 0,z_position = 0,x_position = 0,y_rotation = 0;
  var orientation = computeangle(Tux,target) > Tux.getAttribute("rotation").y ? 1 : -1;
  var myTimer = 0;
  myTimer = setInterval(function(){
  var angle = computeangle(Tux,target);
  zdirection = computezdirection(Tux,target);
  xdirection = computexdirection(Tux,target);

    if(!zarrived)
    {
      z_position = Tux.getAttribute("position").z + zdirection*zpas;
      if((z_position > target.getAttribute("position").z && zdirection == 1) || (z_position < target.getAttribute("position").z && zdirection == -1) || teleportation)
      {
         z_position = target.getAttribute("position").z;
         zarrived=true;
      }
    }

    if(!xarrived)
    {
      x_position = Tux.getAttribute("position").x + xdirection*xpas;
      if((x_position > target.getAttribute("position").x && xdirection == 1) || (x_position < target.getAttribute("position").x && xdirection == -1) || teleportation)
      {
         x_position = target.getAttribute("position").x;
         xarrived=true;
      }
    }

    y_rotation = Tux.getAttribute("rotation").y + 5*orientation;
    if((y_rotation <= angle && orientation == -1) ||(y_rotation >= angle && orientation == 1) || angle == 0)
      y_rotation = angle;
  // these instructions are responsible for moving the Penguin.
    Tux.setAttribute('rotation', {x:0,y:y_rotation,z:0});

    console.log(target.getAttribute("position").y);
    if((y_rotation <= angle && orientation == -1) || (y_rotation >= angle && orientation == 1) || angle == 0 ||teleportation)
      Tux.setAttribute('position', {x:x_position,y:target.getAttribute("position").y - 0.5,z:z_position});


    if(zarrived && xarrived)
    {
       index++;
       if(index < elements.length)
       {
         var t = 0;
         if(waiting!="NO")
           t = 6000;
         setTimeout(function() {movethepinguin(points);}, t);
       }
       else
       {
         index = 0;
         animation = true;
       }

       setTimeout(function(){Tux.setAttribute("look-at",lookat);}, 1000);
       clearInterval(myTimer);
    }
  }, 50);
  }
