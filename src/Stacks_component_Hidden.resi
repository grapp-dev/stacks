@react.component
export make: (
  ~below: [#tablet | #desktop]=?,
  ~above: [#mobile | #tablet]=?,
  ~children: React.element,
) => React.element
