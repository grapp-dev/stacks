const visit = require('unist-util-visit')
const { oneLine } = require('common-tags')

const randomId = () => Math.random().toString(36).substr(2, 10)

const transform = (type, attrs) => {
  switch (type) {
    case 'codesandbox':
      return oneLine`
<div class="snack-player">
  <div class="snack" style="margin-top: 15px; margin-bottom: 15px">
    <iframe src="https://codesandbox.io/embed/${attrs.id}?fontsize=14&hidenavigation=1&theme=dark"
      style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
      title="stacks-stack-breakpoint"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>
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
