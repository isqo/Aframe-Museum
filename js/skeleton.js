(function(){
  var onPlatForm = wallHeight/2 + OnCylenders;
  var left  =-width/2 + x_scale/2;
  var right = width/2 - x_scale/2;
 //  // the back wall
 //  $("#the-back-wall").attr('geometry', objToStr({primitive: 'box',height:wallHeight,width:width}));
 //  $("#the-back-wall").attr('position', objToStr({x:0,y:onPlatForm,z:-height/2 + x_scale/2}));
 //  // the right side wall
 //  $("#skeleton>.the-right-side-wall").attr('geometry', objToStr({primitive: 'box',height:wallHeight,width:height}));
 //  $("#skeleton>.the-right-side-wall").attr('material', objToStr({shader: 'standard'}));
 //  $("#skeleton>.the-right-side-wall").attr('position', objToStr({x:right,y:onPlatForm,z:0}));
 //  // the left side wall
 //  $("#the-left-side-wall").attr('geometry', objToStr({primitive: 'box',height:wallHeight,width:height}));
 //  $("#the-left-side-wall").attr('position', objToStr({x:left,y:onPlatForm,z:0}));
 // //the roof
 //  $("#roof").attr('geometry', objToStr({primitive: 'box',height:height,width:width}));
 //  $("#roof").attr('position', objToStr({x:0,y:wallHeight + cynlinderHeight/2 + z_scale/2,z:0}));
 // //the front wall windows
 //  var coeff1 = 2/5;
 //  // var the_front_wall = $('#the-front-wall').children();
 //  var left_window =$('#the-front-wall>a-entity:first-child');
 //  var right_window =$('#the-front-wall>a-entity:last-child');
 //  left_window.attr('geometry', objToStr({primitive: 'box',height:wallHeight,width:width*coeff1}));
 //  left_window.attr('position', objToStr({x:-(width * (1 - coeff1))/2,y:onPlatForm,z:height/2 - x_scale/2}));
 //  right_window.attr('geometry', objToStr({primitive: 'box',height:wallHeight,width:width*coeff1}));
 //  right_window.attr('position', objToStr({x:(width * (1 - coeff1))/2,y:onPlatForm,z:height/2 - x_scale/2}));
 // //the door
 // var left_side =$('#door>a-entity:first-child');
 // var right_side=$('#door>a-entity:last-child');
 // var top_side =$('#door>a-entity:nth-child(2)');
 //
 // var coeff2=1/4;
 // var coeff3=(1- coeff1*2)*coeff2;
 // var coeff4=(1- coeff1*2)*(1-coeff2*2);
 // var x = width * (1- coeff1*2) * (1 - coeff2)/2;
 // left_side.attr('geometry', objToStr({primitive: 'box',height:wallHeight,width:width*coeff3}));
 // left_side.attr('position', objToStr({x:x,y:onPlatForm,z:height/2 - x_scale/2}));
 // right_side.attr('geometry', objToStr({primitive: 'box',height:wallHeight,width:width*coeff3}));
 // right_side.attr('position', objToStr({x:-x,y:onPlatForm,z:height/2 - x_scale/2}));
 // var y = wallHeight*(1 - coeff2)/2
 // top_side.attr('geometry', objToStr({primitive: 'box',height:wallHeight*coeff2,width:width*coeff4}));
 // top_side.attr('position', objToStr({x:0,y:onPlatForm+y,z:height/2 - x_scale/2}));
}
)();
