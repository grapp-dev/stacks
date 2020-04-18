const visit = require('unist-util-visit')
const { oneLine } = require('common-tags')

const randomId = () => Math.random().toString(36).substr(2, 10)

const transform = (type, attrs) => {
  switch (type) {
    case 'snack':
      return oneLine`
<div class="snack-player">
  <div class="snack" style="margin-top: 15px; margin-bottom: 15px">
      <div style="
        overflow: hidden;
        background: #fafafa;
        border: 1px solid rgba(0, 0, 0, .08);
        border-radius: 4px;
        height: 505px;
        width: 100%;
      ">
      <iframe src="https://snack.expo.io/embedded/@mobily/${
        attrs.id
      }?preview=true&amp;platform=web&amp;iframeId=${randomId()}&amp;name=${
        attrs.name
      }&amp;theme=light" height="100%" width="100%" frameborder="0" data-snack-iframe="true" style="display: block;"></iframe>
    </div>
  </div>
</div>
`
  }
}

const shortcodes = () => {
  return (tree, file) => {
    visit(tree, 'shortcode', node => {
      node.type = 'html'
      node.value = transform(node.identifier, node.attributes)
    })
  }
}

module.exports = { shortcodes }
