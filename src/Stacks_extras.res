module WeakMap = {
  type t<'key, 'value>
  @bs.new external make: unit => t<'k, 'v> = "WeakMap"
  @bs.send external get: (t<'k, 'v>, 'k) => 'v = "get"
  @bs.send external set: (t<'k, 'v>, 'k, 'v) => unit = "set"
  @bs.send external has: (t<'k, 'v>, 'k) => bool = "has"
  @bs.send external remove: (t<'k, 'v>, 'k) => unit = "remove"

  let get = (weakMap, key) => has(weakMap, key) ? Some(get(weakMap, key)) : None
}
