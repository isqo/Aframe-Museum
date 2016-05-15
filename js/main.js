

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
  $("[x-rotation]").attr('rotation',objToStr({x:90,y:0,z:0}));
  $("[y-rotation]").attr('rotation',objToStr({x:0,y:90,z:0}));
  $("[no-rotation]").attr('rotation',objToStr({x:0,y:0,z:90}));
  player.attr('position', objToStr({x:0,y:cynlinderHeight/2 + 5,z:0}));
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

  AFRAME.registerComponent('collision-listener', {
  init: function () {
    var el = this.el;
    el.addEventListener('collide', function (event) {
      var first_step = el.hasAttribute('first-step');$
      if(old_el != el)
      {

        var x =player.attr('position').x;
        var y =player.attr('position').y;
        var z =player.attr('position').z;
        var new_z=z;
        var new_y=y + 1;
        if((z < old_z && y > old_y) || first_step){
          console.log("first element collision");
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
