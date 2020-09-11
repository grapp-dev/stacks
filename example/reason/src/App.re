open ReactNative;

open Stacks;

let styles =
  Style.(
    StyleSheet.create({
      "view": style(~width=100. |> pct, ()),
      "columns": style(~height=100. |> dp, ()),

      "scrollView": style(~backgroundColor="lightgray", ()),
      "stack1": style(~backgroundColor="red", ()),
      "stack2": style(~backgroundColor="yellow", ()),
    })
  );

module Placeholder = {
  [@react.component]
  let make = (~width, ~height) => {
    <View
      style=Style.(
        viewStyle(
          ~backgroundColor="gray",
          ~width=width |> dp,
          ~height=height |> dp,
          (),
        )
      )
    />;
  };
};

[@react.component]
let app = () =>
  <StacksProvider spacing=4. debug=true>
    <StatusBar barStyle=`darkContent />
    <SafeAreaView>
      <View style=styles##view>
        <Hidden below=`tablet> <Text> "hidden"->React.string </Text> </Hidden>
        <Stack space=[|4.|] align=[|`left, `right|]>
          <Text> "hello!"->React.string </Text>
          <Text> "hello2!"->React.string </Text>
          <Stack space=[|10., 1.|] align=[|`right|]>
            React.null
            React.null
            <Text> "inner hello!"->React.string </Text>
            React.null
            <Text> "inner hello2!"->React.string </Text>
          </Stack>
          <Text> "hello3!"->React.string </Text>
          <Inline space=[|1.|]>
            <Text> "inline1"->React.string </Text>
            <Text> "inline2"->React.string </Text>
            React.null
            <Text> "inline3"->React.string </Text>
            <Text> "inline4"->React.string </Text>
            <Text> "inline4"->React.string </Text>
            <Text> "inline4"->React.string </Text>
            <Text> "inline4"->React.string </Text>
            <Text> "inline4"->React.string </Text>
            <Text> "inline4"->React.string </Text>
          </Inline>
          <Tiles columns=[|2|] space=[|1.|]>
            <Text> "tiles1"->React.string </Text>
            <Text> "tiles2"->React.string </Text>
            React.null
            <Text> "tiles3"->React.string </Text>
            <Text> "tiles4"->React.string </Text>
            React.null
            <Tiles columns=[|2|] space=[|1.|]>
              <Text> "it1"->React.string </Text>
              <Text> "it2"->React.string </Text>
              <Text> "it3"->React.string </Text>
            </Tiles>
            <Columns space=[|1.|] alignX=[|`center|] alignY=[|`center|]>
              <Column>
                <Column> <Text> "itc1"->React.string </Text> </Column>
              </Column>
              <Column> <Text> "itc2"->React.string </Text> </Column>
            </Columns>
          </Tiles>
          <Columns
            space=[|4.|]
            alignX=[|`center|]
            alignY=[|`center|]
            collapseBelow=`tablet>
            <Column width=`content>
              <Text> "column1"->React.string </Text>
            </Column>
            <Column width=`content>
              <Text> "column2"->React.string </Text>
            </Column>
            <Column width=`content>
              <Text> "column3"->React.string </Text>
            </Column>
            <Hidden below=`tablet>
              <Column width=`content>
                <Text> "hidden"->React.string </Text>
              </Column>
            </Hidden>
          </Columns>
          <Columns space=[|1.|] alignX=[|`center|] alignY=[|`center|]>
            <Column width=`content>
              <Placeholder width=40. height=90. />
            </Column>
            <Column> <Text> "column2"->React.string </Text> </Column>
            <Column width=`content>
              <Columns space=[|1.|]>
                <Column width=`content>
                  <Placeholder width=20. height=50. />
                </Column>
                <Column width=`content>
                  <Placeholder width=20. height=30. />
                </Column>
              </Columns>
            </Column>
          </Columns>
          <Columns space=[|1.|] alignX=[|`center|] alignY=[|`center|]>
            <Column width=`content>
              <Placeholder width=40. height=90. />
            </Column>
            <Column width=`content>
              <Placeholder width=40. height=120. />
            </Column>
            <Column width=`content>
              <Placeholder width=40. height=60. />
            </Column>
          </Columns>
        </Stack>
        <FillView> <Text> "fill view"->React.string </Text> </FillView>
      </View>
    </SafeAreaView>
  </StacksProvider>;
