// $Id$

/**
 *  Displays messages with jGrowl.
 */

var XmenuController = XmenuController || {};

XmenuController.states = { 'closed': 0, 'open': 1 };

XmenuController.XmenuItem = function ($item) {
  var state = XmenuController.states.closed;
  var $children = jQuery('.xmenu-item-children', $item);
  var offset = $item.position();

  $children.css({
    "top": offset.top + "px",
    "left": (offset.left + $item.width()) + "px"
  });

  jQuery('.xmenu-expand', $item).click(expandClickAction);

  jQuery('.xmenu-item-children-close', $item).click(closeClickAction);

  function expandClickAction() {
    setState((state + 1) % 2);
  }

  function closeClickAction() {
    setState(XmenuController.states.closed);
  }

  function setState(newState) {
    if (newState != state) {
      if (newState == XmenuController.states.open) {
        XmenuController.closeAll();
        $children.show();
      } else if (newState == XmenuController.states.closed) {
        $children.hide();
      }
      state = newState;
    }
  }
  this.setState = setState;
}

XmenuController.rootItems = new Array();

XmenuController.init = function () {
  jQuery('.xmenu-item').not('.xmenu-processed').each(function (i) {
    var $item = jQuery(this);
    $item.addClass('xmenu-processed');
    XmenuController.rootItems[i] = new XmenuController.XmenuItem($item);
  });
}

XmenuController.closeAll = function () {
  for (i in XmenuController.rootItems) {
    XmenuController.rootItems[i].setState(XmenuController.states.closed);
  }
}



Drupal.behaviors.xmenu = {
  attach: XmenuController.init
}