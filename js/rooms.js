
(function(){
  var onPlatForm = wallHeight/2 + OnCylenders;
  var coeff = 7/8;
  var roomsWidth = width*coeff - 1.5*z_scale;
  var roomHeight = height - hallHeight;
  var y = onPlatForm - (wallHeight - wallHeight/2)/2;
  var z = (height - roomHeight)/2;

  var rooms = $('#rooms>.room');
  var test = 0;

  for (var i = 0; i < rooms.length; i++) {
    var the_side_walls = rooms.eq(i).find(".the-side-wall");
    for (var j = 0; j < 2; j++) {
      var the_side_wall = the_side_walls.eq(j);
        var x = -width/2 + ((j+i) *(roomsWidth/rooms.length)) + z_scale/2;
        the_side_wall.attr('geometry', objToStr({primitive: 'box',height:wallHeight/2,width:roomHeight}));
        the_side_wall.attr('position', objToStr({x:x,y:y,z:-z}));
      }
    var door_walls = rooms.eq(i).find("#door").children();
        for (var j = 0; j < door_walls.length; j++) {
          var coeff2=1/4;
          var coeff;

          if(j==1){
            coeff = 1- 2*coeff;
            coeff2=1/8;
          }
          else{
            coeff = 1.2/5;
            coeff2=1;
          }

          var door_wall_width =((roomsWidth/rooms.length) - z_scale) * coeff;
          var door_x = -(width-door_wall_width)/2 + test+z_scale;
          test+=door_wall_width;
          var door_y = y;
          var door_z = - height/2 + hallHeight;
          var door_wall_height =wallHeight/2 * coeff2;
          if(j==door_walls.length - 1)
          {
            test+=z_scale;
          }

          if(j == 1)
          {
            door_y = y + wallHeight/4-door_wall_height/2;
          }
          door_walls.eq(j).attr('geometry', objToStr({primitive: 'box',height:door_wall_height,width:door_wall_width}));
          door_walls.eq(j).attr('position', objToStr({x:door_x,y:door_y,z:-door_z}));
        }
    }
}
)();
