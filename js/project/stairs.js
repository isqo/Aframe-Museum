var bool = true;
function upthestairs(el,character)
{
  var first_step = typeof el.attr('first-step') !== typeof undefined && el.attr('first-step') !== false;

  if((old_el!=null && old_el.attr("id") != el.attr("id")) || old_el==null)
  {

    if(character.attr("id") == "Tux" && first_step && bool)
    {
      character.attr('position', objToStr({x:12.625,y: 4,z:-5}));
      bool = false;
    }
    else {

      var x =character.attr('position').x;
      var y =character.attr('position').y;
      var z =character.attr('position').z;
      var new_z=z - 0.5;
      var new_y=y + 1;
      if((z < old_z && y > old_y) || first_step){
        character.attr('position', objToStr({x:x,y:new_y,z:new_z}));
        old_el = el;
      }
      else {
        old_el = null;
      }
      old_z = new_z ;
      old_y = new_y ;

    }
  }
}
