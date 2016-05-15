
(function(){
  var platFormHeight = height + marge;
  var platFormWidth = width + marge;

  var right = (platFormWidth/2)- cynlinderRadius;
  var top = (platFormHeight/2)  - cynlinderRadius;
  var bottom = (-platFormHeight/2)+ cynlinderRadius;
  var left = (-platFormWidth/2)+ cynlinderRadius;

  // the floor
  var floor = $('#platform>.floor');
  floor.attr('geometry', objToStr({primitive: 'box',height:platFormHeight,width:platFormWidth}));
  floor.attr('position', objToStr({x:0,y:OnCylenders,z:0}));

  var cylinders = $('#platform>#cylinders').children();

  // top right cylinder
  cylinders.eq(0).attr('position',  objToStr({x:right,y:0,z:top}));
  // bottom right cylinder
  cylinders.eq(1).attr('position',  objToStr({x:right,y:0,z:bottom}));
  // top left cylinder
  cylinders.eq(2).attr('position',  objToStr({x:left,y:0,z:top}));
  // bottom left cylinder
  cylinders.eq(3).attr('position',  objToStr({x:left,y:0,z:bottom}));
}
)();
