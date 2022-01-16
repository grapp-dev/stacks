@module("react")
external isValidElement: React.element => bool = "isValidElement"

external resolve: 'a => Stacks_types.resolveResponsiveProp<'b> = "%identity"
external resolveAxisX: 'a => option<Stacks_types.axisX> = "%identity"
external resolveAxisY: 'a => option<Stacks_types.axisY> = "%identity"
external coerce: 'a => 'b = "%identity"
