open ReactNative;

[@genType]
[@react.component]
let make = (~space, ~align, ~children) => {
  <View>
    {React.array(Belt.Array.map(children, child => {<View> child </View>}))}
  </View>;
};
