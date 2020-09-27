export type responsiveProp<T> = T | Readonly<[T, T]> | Readonly<[T, T, T]>
export type normalizedProp<T> = Readonly<[T, T, T]>
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
