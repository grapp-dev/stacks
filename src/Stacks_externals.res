@module("react")
external isValidElement: React.element => bool = "isValidElement"

@module("react-fast-compare")
external isEqual: ('a, 'a) => bool = "default"

external coerce: 'a => 'b = "%identity"
