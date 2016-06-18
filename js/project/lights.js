var lightflag = true;
var entity = document.querySelector('#furelise');
var myTimer = setInterval(function(){
  if(player.attr('position').z < 10 && lightflag)
  {
    setTimeout(function(){$('#light').attr('light',objToStr({type: 'ambient',color: '#CCC'}));}, 500);
    setTimeout(function(){$('#light').attr('light',objToStr({type: 'ambient',color: 'black'}));}, 700);
    setTimeout(function(){$('#light').attr('light',objToStr({type: 'ambient',color: '#CCC'}));lightflag = false;
      if(animation){
        movethepinguin(points);
        animation = false;
      }
      entity.components.sound.play();
    }, 1050);
  }
  else if(player.attr('position').z > 10 && !lightflag)
  {
  setTimeout(function(){$('#light').attr('light',objToStr({type: 'ambient',color: 'black'}));
    lightflag = true;
    entity.components.sound.pause();
  }, 500);
  }
}, 100);
