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
    <div class="xmenu-item-root-left">
      <div class="xmenu-item-root-parent-name">
        <?php print $parent_link_prefix ?>
        <?php print $parent_link ?>
        <?php print $parent_link_suffix ?>
      </div>
      <?php if(!empty($additional)): ?>
        <div class="xmenu-item-root-additional">
          <?php print $additional ?>
        </div>
      <? endif; ?>
    </div>
    <?php if(!empty($children_first) || !empty($children_second)): ?>
      <div class="xmenu-expand">
        >
      </div>
    <? endif; ?>
    <div class="clear"></div>
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
<div class="clear"></div>