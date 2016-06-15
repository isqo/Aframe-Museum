var lock = false;
function openandclosethedoor(el)
{
  if(!lock)
  {
    lock = true;
    var myTimer = setInterval(function()
    {
      if(open($("#the-front-wall-door .left"),$("#the-front-wall-door .right"),4.51))
      {
        clearInterval(myTimer);

        setTimeout(function(){
          var myTimer = setInterval(function()
          {
            if(close($("#the-front-wall-door .left"),$("#the-front-wall-door .right"),1.51))
            {
              clearInterval(myTimer);
              lock = false;
            }
              }, 50);
        }, 1000);
      }
    }, 50);
  }
}

function open(left,right,stop)
{
  var rightposition = right.attr('position');
  var leftposition = left.attr('position');
  leftposition.x = leftposition.x - 0.03;
  rightposition.x = rightposition.x + 0.03;

  if(leftposition.x <= -stop)
    leftposition.x = -stop;

  if(rightposition.x >= stop)
    rightposition.x = stop;

  if(rightposition.x == stop && leftposition.x == -stop)
      return true;

  left.attr('position', objToStr({x:leftposition.x,y:leftposition.y,z:leftposition.z}));
  right.attr('position', objToStr({x:rightposition.x,y:rightposition.y,z:rightposition.z}));

  return false;
}

function close(left,right,stop)
{
  var rightposition = right.attr('position');
  var leftposition = left.attr('position');
  leftposition.x = leftposition.x + 0.03;
  rightposition.x = rightposition.x - 0.03;

  if(leftposition.x >= -stop)
    leftposition.x = -stop;

  if(rightposition.x <= stop)
    rightposition.x = stop;

  if(leftposition.x == -stop && rightposition.x == stop)
    return true;

  left.attr('position', objToStr({x:leftposition.x,y:leftposition.y,z:leftposition.z}));
  right.attr('position', objToStr({x:rightposition.x,y:rightposition.y,z:rightposition.z}));
  return false;
}
