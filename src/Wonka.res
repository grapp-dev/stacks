type signalT<'a>
type sinkT<'a> = (. signalT<'a>) => unit
type sourceT<'a> = sinkT<'a> => unit
type observerT<'a> = {
  next: 'a => unit,
  complete: unit => unit,
}
type teardownT = (. unit) => unit
type operatorT<'a, 'b> = sourceT<'a> => sourceT<'b>
type subscriptionT = {unsubscribe: unit => unit}
type subscribeConsumerT<'a> = sourceT<'a> => subscriptionT

@module("wonka") external make: ((. observerT<'a>) => teardownT) => sourceT<'a> = "make"
@module("wonka") external share: sourceT<'a> => sourceT<'a> = "share"
@module("wonka") external debounce: ((. 'a) => int) => operatorT<'a, 'a> = "debounce"
@module("wonka") external subscribe: ((. 'a) => unit) => subscribeConsumerT<'a> = "subscribe"
