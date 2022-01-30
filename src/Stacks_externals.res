@module("react")
external isValidElement: React.element => bool = "isValidElement"

external coerce: 'a => 'b = "%identity"
