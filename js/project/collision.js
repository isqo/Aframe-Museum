player.bind('collide', function (e) {
  var el = $(e.detail.body.el);
  if(el.closest("#the-front-wall-door").length > 0)
  {
    openandclosethedoor(el);
  }
  else if(el.closest("#stairs").length > 0)
  {
    upthestairs(el,player);
  }

  if(el.attr("id") == "floor")
  {
       old_el = null;
  }
});
