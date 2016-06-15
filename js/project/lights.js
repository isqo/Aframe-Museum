var lightflag = true;
var myTimer = setInterval(function(){
  if(player.attr('position').z < 10 && lightflag)
  {
    setTimeout(function(){$('#light').attr('light',objToStr({type: 'ambient',color: '#CCC'}));}, 500);
    setTimeout(function(){$('#light').attr('light',objToStr({type: 'ambient',color: 'black'}));}, 700);
    setTimeout(function(){$('#light').attr('light',objToStr({type: 'ambient',color: '#CCC'}));lightflag = false;}, 1050);
  }
  else if(player.attr('position').z > 10 && !lightflag)
  {
  setTimeout(function(){$('#light').attr('light',objToStr({type: 'ambient',color: 'black'}));
    lightflag = true;
  }, 500);
  }
}, 100);
