(function(){
  var onPlatForm = wallHeight/2 + OnCylenders;
  var mezzanineHeight = height - hallHeight;
  var coeff = 7/8;
  var mezzanineWidth = width*coeff;
  var y = wallHeight/2 + OnCylenders;
  var z = (height - mezzanineHeight)/2;
  var alpha_x = (width - mezzanineWidth)/2;

  var z_scale = 1;
  // the floor
  $("#mezzanine>.floor").attr('geometry', objToStr({primitive: 'box',height:mezzanineHeight,width:mezzanineWidth}));
  $("#mezzanine>.floor").attr('position', objToStr({x:-alpha_x,y:y,z:-z}));
  $("#mezzanine>.floor").attr('scale', objToStr({x:x_scale,y:y_scale,z:0.01}));
  // the right side wall
  $("#mezzanine>.the-right-side-wall").attr('geometry', objToStr({primitive: 'box',height:wallHeight/2,width:mezzanineHeight}));
  y = onPlatForm - (wallHeight - wallHeight/2)/2;
  x = mezzanineWidth/2 - alpha_x - x_scale/2;
  $("#mezzanine>.the-right-side-wall").attr('position', objToStr({x:x,y:y,z:-z}));


  $("#mezzanine>.the-front-window").attr('geometry', objToStr({primitive: 'box',height:wallHeight/2,width:mezzanineWidth}));
  z = height/2 - hallHeight;
  $("#mezzanine>.the-front-window").attr('position', objToStr({x:-alpha_x,y:wallHeight + z_scale/2 ,z:z}));


  // stairs
  var stairsHeight = height/2
  var step = -(stairsHeight/15);
  var i = 0;
  x=x+((1-coeff)*width)/2
  y = OnCylenders + 0.5;
  while(y < wallHeight/2 + OnCylenders)
  {
      z = (height - (stairsHeight))/2;
      var box = $("<a-entity></a-entity>");
      box.attr('geometry', objToStr({primitive: 'box',height:stairsHeight,width:(1-coeff)*width}));
      box.attr('position', objToStr({x:x,y:y,z:-z}));
      box.attr('mixin','box-scale floor');
      box.attr('static-body','');
      box.attr('rotation',objToStr({x:90,y:0,z:0}));
      box.attr('scale',objToStr({x:x_scale,y:y_scale,z:z_scale}));
      box.attr('collision-listener','');
      if(i == 0)
        box.attr('first-step','');
      $("#mezzanine>.stairs").append(box);
      stairsHeight = stairsHeight + step;
      y =  y + 0.5;
      i++
  }
}
)();
