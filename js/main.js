  
  var cynlinderHeight = document.querySelector('#cylinder').getAttribute('geometry').height;
  var cynlinderRadius = document.querySelector('#cylinder').getAttribute('geometry').radius;

  var ladalle = document.querySelector('#laplateforme>#ladalle');
  var height = 30;
  var width = 30; 				
  ladalle.setAttribute('geometry', {primitive: 'box',height:height,width:width});
  ladalle.setAttribute('position', {x:0,y:cynlinderHeight/2,z:0});
  
  var lespieds = document.querySelector('#laplateforme>#lespieds');
  lespieds.children[0].setAttribute('position', {x:(width/2)- cynlinderRadius,y:0,z:(height/2) - cynlinderRadius});
  lespieds.children[1].setAttribute('position', {x:(width/2)- cynlinderRadius,y:0,z:(-height/2)+ cynlinderRadius});
  lespieds.children[2].setAttribute('position', {x:(-width/2)+ cynlinderRadius,y:0,z:(height/2)- cynlinderRadius});
  lespieds.children[3].setAttribute('position', {x:(-width/2)+ cynlinderRadius,y:0,z:(-height/2)+ cynlinderRadius});

  var murs = document.querySelector('#murs');
  var terrasse = 5;
  var murheight = height/2;
  var cotemurwidth = height - terrasse;
  var facemurwidth = width - 3;
  murs.children[0].setAttribute('geometry', {primitive: 'box',height:murheight,width:facemurwidth});
  murs.children[1].setAttribute('geometry', {primitive: 'box',height:murheight,width:cotemurwidth});
  murs.children[2].setAttribute('geometry', {primitive: 'box',height:murheight,width:cotemurwidth}); 
  murs.children[0].setAttribute('position', {x:0,y:murheight/2 + cynlinderHeight/2,z:-height/2 + 0.5});
  murs.children[1].setAttribute('position', {x:-facemurwidth/2,y:murheight/2 + cynlinderHeight/2,z:-terrasse/2});
  murs.children[2].setAttribute('position', {x:facemurwidth/2,y:murheight/2 + cynlinderHeight/2,z:-terrasse/2});

  var plafond = document.querySelector('#plafond');
  var plafondwidth = width - 2;
  plafond.setAttribute('geometry', {primitive: 'box',height:cotemurwidth,width:plafondwidth});
  plafond.setAttribute('position', {x:0,y:cynlinderHeight/2 + murheight,z:-terrasse/2});

  var deuxiemeetage = document.querySelector('#deuxiemeetage');
  var deuxiemeetageheight = cotemurwidth;
  var deuxiemeetagewidth = plafondwidth*2/3;
    
  deuxiemeetage.setAttribute('geometry', {primitive: 'box',height:deuxiemeetageheight,width:deuxiemeetagewidth});
  deuxiemeetage.setAttribute('position', {x:-deuxiemeetagewidth/4,y:cynlinderHeight/2 + murheight/2,z:-deuxiemeetageheight/2 -terrasse/2});
