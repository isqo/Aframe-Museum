  var player = $('#player');
  var animation = true;
  var tux =$('#Tux');
  var points = document.getElementsByClassName("point");

  var cynlinderHeight = $('#cylinder').attr('geometry').height;
  player.attr('position', objToStr({x:0,y:cynlinderHeight/2 + 5,z:12}));
  tux.attr('position', objToStr({x:0,y:cynlinderHeight/2 + 0.5,z:5}));
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
