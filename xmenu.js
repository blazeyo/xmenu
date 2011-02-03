// $Id$

/**
 *  @file xmenu.js
 *  Xmenu javascript controller.
 */

var XmenuController = XmenuController || {};

/** Root menu items states. */
XmenuController.states = {'closed': 0, 'open': 1};


/**
 *  Root menu item class. Handles state changes.
 */
XmenuController.XmenuItem = function ($item) {
  /** Item state. */
  var state = XmenuController.states.closed;
  /** jQuery object that wraps children div. */
  var $children = jQuery('.xmenu-item-children', $item);

  // Fire constructor.
  construct();

  /**
   *  Initializes the object.
   */
  function construct() {
    // Position children on the right of root item div.
    var offset = $item.position();
    $children.css({
      "top": Math.floor(offset.top) + "px",
      "left": Math.floor(offset.left + $item.width()) + "px"
    });

    // Attach event handlers.
    jQuery('.xmenu-expand', $item).click(expandClickAction);
    jQuery('.xmenu-item-children-close', $item).click(closeClickAction);
  }

  /**
   *  Changes state to oposite.
   */
  function expandClickAction() {
    setState((state + 1) % 2);
  }

  /**
   *  Sets state to closed.
   */
  function closeClickAction() {
    setState(XmenuController.states.closed);
  }

  /**
   *  Changes state of the item (opens or closes if needed).
   */
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
  /** Make this method public. XmenuController needs it. */
  this.setState = setState;
}

/** Container for menu items. */
XmenuController.rootItems = new Array();

/**
 *  Initialize the controller.
 */
XmenuController.init = function () {
  jQuery('.xmenu-item').not('.xmenu-processed').each(function (i) {
    var $item = jQuery(this);
    $item.addClass('xmenu-processed');
    XmenuController.rootItems[i] = new XmenuController.XmenuItem($item);
  });
}

/**
 *  Close all opened items.
 */
XmenuController.closeAll = function () {
  for (i in XmenuController.rootItems) {
    XmenuController.rootItems[i].setState(XmenuController.states.closed);
  }
}

Drupal.behaviors.xmenu = {
  attach: XmenuController.init
}