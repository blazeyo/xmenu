<?php
// $Id$
/**
 *  @file xmenu-item.tpl.php
 *  Xmenu root item template.
 *
 *  @see template_preprocess_xmenu_root_item
 */
?>
<div class="xmenu-item">
  <div class="xmenu-item-root">
    <?php print $parent_link ?>
    <?php if(!empty($children_first) || !empty($children_second)): ?>
      <div class="xmenu-expand">
        >
      </div>
    <? endif; ?>
  </div>
  <?php if(!empty($children_first) || !empty($children_second)): ?>
    <div class="xmenu-item-children">
      <?php print $parent_link ?>
      <?php print $close ?>
      <div class="clear"></div>
      <div class="xmenu-item-children-left">
        <?php print render($children_first); ?>
      </div>
      <div class="xmenu-item-children-right">
        <?php print render($children_second); ?>
      </div>
    </div>
  <?php endif; ?>
</div>