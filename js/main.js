  
  var cynlinderHeight = document.querySelector('#cylinder').getAttribute('geometry').height;
  var cynlinderRadius = document.querySelector('#cylinder').getAttribute('geometry').radius;

//plateforme
  var marge = 10;
  var separationhalletpieces = 10;
  var ladalle = document.querySelector('#laplateforme>#ladalle');
  var height = 20 + marge;
  var width = 30 + marge; 		
  var xscale = 0.5;

  ladalle.setAttribute('geometry', {primitive: 'box',height:height,width:width});
  ladalle.setAttribute('position', {x:0,y:cynlinderHeight/2,z:0});
  var lespieds = document.querySelector('#laplateforme>#lespieds');
  lespieds.children[0].setAttribute('position', {x:(width/2)- cynlinderRadius,y:0,z:(height/2) - cynlinderRadius});
  lespieds.children[1].setAttribute('position', {x:(width/2)- cynlinderRadius,y:0,z:(-height/2)+ cynlinderRadius});
  lespieds.children[2].setAttribute('position', {x:(-width/2)+ cynlinderRadius,y:0,z:(height/2)- cynlinderRadius});
  lespieds.children[3].setAttribute('position', {x:(-width/2)+ cynlinderRadius,y:0,z:(-height/2)+ cynlinderRadius});


//murs de cote et de derriere
  var murs = document.querySelector('#murs');
  var murheight = 6;
  var cotemurwidth = height - marge;
  var facemurwidth = width - marge;
  var surplateforme = murheight/2 + cynlinderHeight/2;
  murs.children[0].setAttribute('geometry', {primitive: 'box',height:murheight,width:facemurwidth});
  murs.children[1].setAttribute('geometry', {primitive: 'box',height:murheight,width:cotemurwidth});
  murs.children[2].setAttribute('geometry', {primitive: 'box',height:murheight,width:cotemurwidth}); 

  murs.children[0].setAttribute('position', {
  	x:0,
  	y:surplateforme,
  	z:-cotemurwidth/2 + xscale
  });

  murs.children[1].setAttribute('position', {
  	x:-facemurwidth/2 + xscale ,
  	y:surplateforme,
  	z:0
  });
  
  murs.children[2].setAttribute('position', {
  	x:facemurwidth/2 - xscale,
  	y:surplateforme,
  	z:0
  });

  var plafond = document.querySelector('#plafond');
  var plafondwidth = width - marge;
  var plafonheight = height - marge;
  plafond.setAttribute('geometry', {primitive: 'box',height:plafonheight,width:plafondwidth});
  plafond.setAttribute('position', {
  	x:0,
  	y:surplateforme/2 + murheight,
  	z:0
  });

//mur d'entrée
  var heightcoeff = 1/2.2;
  var widthcoeff = 1/2.2;
  murs.children[3].setAttribute('geometry', {primitive: 'box',height:murheight,width:facemurwidth*widthcoeff});
  murs.children[4].setAttribute('geometry', {primitive: 'box',height:murheight*heightcoeff,width:facemurwidth- facemurwidth*widthcoeff*2});
  murs.children[5].setAttribute('geometry', {primitive: 'box',height:murheight,width:facemurwidth*widthcoeff}); 

  murs.children[3].setAttribute('position', {
  	x:-(facemurwidth-facemurwidth*widthcoeff)/2,
  	y:surplateforme,
  	z:cotemurwidth/2 - xscale
  });

  murs.children[4].setAttribute('position', {
  	x:0,
  	y:surplateforme + (murheight-murheight*heightcoeff)/2,
  	z:cotemurwidth/2 - xscale
  });

  murs.children[5].setAttribute('position', {
  	x:(facemurwidth-facemurwidth*widthcoeff)/2,
  	y:surplateforme,
  	z:cotemurwidth/2 - xscale
  });

//mur pieces

   var piecesheight = murheight/2;
   murs.children[6].setAttribute('geometry', {primitive: 'box',height:piecesheight,width:facemurwidth});
   murs.children[6].setAttribute('position', {
   	x:0,
   	y:surplateforme - (murheight - piecesheight)/2,
   	z: separationhalletpieces - cotemurwidth/2
   });

//mur mezzanine
  var mezzanineheight = piecesheight;
  var mezzaninewidth = facemurwidth - facemurwidth/1.7; 

   murs.children[7].setAttribute('geometry', {primitive: 'box',height:mezzanineheight,width:mezzaninewidth});
   murs.children[7].setAttribute('position', {
   	x:-(facemurwidth - mezzaninewidth)/2,
   	y:surplateforme + mezzanineheight/2,
   	z: separationhalletpieces - cotemurwidth/2
   });

   murs.children[8].setAttribute('geometry', {primitive: 'box',height:mezzanineheight,width:mezzaninewidth});
   murs.children[8].setAttribute('position', {
   	x:(facemurwidth - mezzaninewidth)/2,
   	y:surplateforme + mezzanineheight/2,
   	z: separationhalletpieces - cotemurwidth/2
   });


  // var deuxiemeetage_1 = document.querySelector('#deuxiemeetage').children[0];
  // var deuxiemeetageheight = cotemurwidth;
  // var deuxiemeetagewidth = plafondwidth*2.4/3;
  // deuxiemeetage_1.setAttribute('geometry', {primitive: 'box',height:deuxiemeetageheight,width:deuxiemeetagewidth});
  // deuxiemeetage_1.setAttribute('position', {x:-(plafondwidth - deuxiemeetagewidth)/2,y:cynlinderHeight/2 + murheight/2,z: -terrasse/2});


  

  // var player = document.querySelector('#player');
  // player.setAttribute('position', {x:0,y:cynlinderHeight/2 + 5,z:0});