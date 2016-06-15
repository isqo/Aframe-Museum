  var cynlinderHeight = $('#cylinder').attr('geometry').height;
  var cynlinderRadius = $('#cylinder').attr('geometry').radius;
  var OnCylenders = cynlinderHeight/2;
  var wallHeight = 6;
  var marge = 5;
  var height = 20;
  var width = 30;
  var separationhalletpieces = 10;
  var xscale = 0.5;
  var hallHeight = 10;
  var x_scale=1;
  var y_scale=1;
  var z_scale=1;
  var player = $('#player');
  $("#box-scale").attr('scale',objToStr({x:x_scale,y:y_scale,z:z_scale}));
  // $("[x-rotation]").attr('rotation',objToStr({x:90,y:0,z:0}));
  // $("[y-rotation]").attr('rotation',objToStr({x:0,y:90,z:0}));
  // $("[no-rotation]").attr('rotation',objToStr({x:0,y:0,z:90}));
  player.attr('position', objToStr({x:0,y:cynlinderHeight/2 + 5,z:12}));
  var old_el = null;
  var old_z = 0;
  var old_y = 0;

  function objToStr(object)
  {
    var output = "";
    for (var property in object) {
        if (object.hasOwnProperty(property)) {
            if(property=="x" || property=="y"||property=="z")
            {
              output =(property!="z")? output.concat(object[property]," ") : output.concat(object[property]);
            }
            else {
              output = output.concat(property,":",object[property],";");
            }
        }
    }
    return output;
  }

  AFRAME.registerComponent('collision-stairs-listener', {
  init: function () {
    var el = this.el;
    el.addEventListener('collide', function (event) {

      var first_step = el.hasAttribute('first-step');
      if((old_el!=null && old_el.getAttribute("id") != el.getAttribute("id")) || old_el==null)
      {
        var x =player.attr('position').x;
        var y =player.attr('position').y;
        var z =player.attr('position').z;
        var new_z=z - 0.2;
        var new_y=y + 1;
        if((z < old_z && y > old_y) || first_step){
          player.attr('position', objToStr({x:x,y:new_y,z:new_z}));
          old_el = el;
        }
        else {
          old_el = null;
        }
        old_z = new_z ;
        old_y = new_y ;
      }
});
  }
});

AFRAME.registerComponent('collision-floor-listener', {
init: function () {
  var el = this.el;
  el.addEventListener('collide', function (event) {
   old_el = null;
});
}
});

var lock = false;
var playerEl = document.querySelector('[camera]');
playerEl.addEventListener('collide', function (e) {
  var el = e.detail.body.el;

  if(el.parentNode.parentNode.getAttribute("id") == "the-front-wall-door")
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
else if(el.parentNode.classList.contains('stairs'))
{
  var first_step = el.hasAttribute('first-step');
  if((old_el!=null && old_el.getAttribute("id") != el.getAttribute("id")) || old_el==null)
  {
    var x =player.attr('position').x;
    var y =player.attr('position').y;
    var z =player.attr('position').z;
    var new_z=z - 0.2;
    var new_y=y + 1;
    if((z < old_z && y > old_y) || first_step){
      player.attr('position', objToStr({x:x,y:new_y,z:new_z}));
      old_el = el;
    }
    else {
      old_el = null;
    }
    old_z = new_z ;
    old_y = new_y ;
  }
}
  // console.log('Player has collided with body #' + e.detail.body.id);
});

function open(portegauche,portedroite,positionarret)
{
  var positiondroite = portedroite.attr('position');
  var positiongauche = portegauche.attr('position');
  var positiongauche_x = positiongauche.x - 0.03;
  var positiondroite_x = positiondroite.x + 0.03;

  if(positiongauche_x <= -positionarret)
    positiongauche_x = -positionarret;

  if(positiondroite_x >= positionarret)
    positiondroite_x = positionarret;

  portegauche.attr('position', objToStr({x:positiongauche_x,y:positiongauche.y,z:positiongauche.z}));
  portedroite.attr('position', objToStr({x:positiondroite_x,y:positiondroite.y,z:positiondroite.z}));

  if(positiondroite_x == positionarret && positiongauche_x == -positionarret)
      return true;

  return false;
}

function close(portegauche,portedroite,positionarret)
{
  var positiondroite = portedroite.attr('position');
  var positiongauche = portegauche.attr('position');
  var positiongauche_x = positiongauche.x + 0.03;
  var positiondroite_x = positiondroite.x - 0.03;

  if(positiongauche_x >= -positionarret)
    positiongauche_x = -positionarret;

  if(positiondroite_x <= positionarret)
    positiondroite_x = positionarret;

  portegauche.attr('position', objToStr({x:positiongauche_x,y:positiongauche.y,z:positiongauche.z}));
  portedroite.attr('position', objToStr({x:positiondroite_x,y:positiondroite.y,z:positiondroite.z}));

  if(positiongauche_x == -positionarret && positiondroite_x == positionarret)
    return true;

      return false;
}
var lightflag = true;
var myTimer = setInterval(function(){
  if(player.attr('position').z < 10 && lightflag)
  {
    setTimeout(function(){document.querySelector('#light').setAttribute('light',{type: 'ambient',color: '#CCC'});}, 500);
    setTimeout(function(){document.querySelector('#light').setAttribute('light',{type: 'ambient',color: 'black'});}, 700);
    setTimeout(function(){document.querySelector('#light').setAttribute('light',{type: 'ambient',color: '#CCC'});    lightflag = false;}, 1050);
  }
  else if(player.attr('position').z > 10 && !lightflag)
  {
  setTimeout(function(){document.querySelector('#light').setAttribute('light',{type: 'ambient',color: 'black'});  lightflag = true;}, 500);
  }
}, 100);
