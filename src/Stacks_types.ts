export type responsiveProp<T> = T | readonly T[]
export type flex =
  | 'content'
  | 'fluid'
  | '1/2'
  | '1/3'
  | '2/3'
  | '1/4'
  | '3/4'
  | '1/5'
  | '2/5'
  | '3/5'
  | '4/5'
export type resolveResponsiveProp<T = unknown> = <X>(
  arg0: null | undefined | responsiveProp<X>,
) => X | undefined
