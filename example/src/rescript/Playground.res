open ReactNative
open Stacks

@react.component
let make = () => {
  <Box padding=[2.]>
    <Stack space=[2.]>
      <Text> {"Columns"->React.string} </Text>
      <Stack space=[3.]>
        <Columns space=[1.]>
          <Column> <Text> {"C1"->React.string} </Text> </Column>
          <Column> <Text> {"C2"->React.string} </Text> </Column>
          <Column> <Text> {"C3"->React.string} </Text> </Column>
        </Columns>
        <Columns space=[1.] alignY=[#center]>
          <Column> <Text> {"C1"->React.string} </Text> </Column>
          <Column>
            <Columns space=[2.]>
              <Column> <Text> {"C21"->React.string} </Text> </Column>
              <Column> <Text> {"C22"->React.string} </Text> </Column>
            </Columns>
          </Column>
          <Column>
            <Tiles columns=[2] space=[1.]>
              <Text> {"T1"->React.string} </Text>
              <Text> {"T2"->React.string} </Text>
              <Text> {"T3"->React.string} </Text>
            </Tiles>
          </Column>
        </Columns>
        <Columns space=[1.]>
          <Column width=[#x12]> <Text> {"C1"->React.string} </Text> </Column>
          <Column width=[#content]> <Text> {"C2"->React.string} </Text> </Column>
          <Column> <Text> {"C3"->React.string} </Text> </Column>
          <Column> <Text> {"C4"->React.string} </Text> </Column>
        </Columns>
        <Columns space=[2.]>
          <Column width=[#x14]>
            <Columns space=[2.]>
              <Column width=[#x12]> <Text> {"C11"->React.string} </Text> </Column>
              <Column width=[#x12]> <Text> {"C12"->React.string} </Text> </Column>
            </Columns>
          </Column>
          <Column> <Text> {"C2"->React.string} </Text> <Text> {"C3"->React.string} </Text> </Column>
        </Columns>
      </Stack>
      <Text> {"Inline"->React.string} </Text>
      <Inline space=[1.]>
        <Text> {"inline 1"->React.string} </Text>
        <Text> {"inline 2"->React.string} </Text>
        <Text> {"inline 3"->React.string} </Text>
      </Inline>
      <Inline space=[1.]>
        <Text> {"Lorem ipsum"->React.string} </Text>
        <Text> {"Quisquam hic"->React.string} </Text>
        <Text> {"nulla ad velit"->React.string} </Text>
        <Text> {"Lorem ipsum"->React.string} </Text>
      </Inline>
      <Text> {"Tiles"->React.string} </Text>
      <Tiles columns=[2] space=[1.]>
        <Text> {"T1"->React.string} </Text>
        <Text> {"T2"->React.string} </Text>
        <Text> {"T3"->React.string} </Text>
        <Text> {"T4"->React.string} </Text>
        <Text> {"T5"->React.string} </Text>
      </Tiles>
      <Text> {"Box"->React.string} </Text>
      <Box direction=[#row]>
        <Box flex=[#fluid] direction=[#row] alignX=[#between]>
          <Box flex=[#fluid] alignX=[#center] alignY=[#center]>
            <Text> {"B1"->React.string} </Text> <Text> {"B2"->React.string} </Text>
          </Box>
          <Box
            flex=[#x14]
            style={
              open Style
              viewStyle(~height=200. |> dp, ())
            }>
            <Box
              style={
                open Style
                viewStyle(~height=100. |> dp, ())
              }>
              <FillView alignX=[#center] alignY=[#center]>
                <Text> {"B0"->React.string} </Text>
              </FillView>
            </Box>
            <Text> {"B1"->React.string} </Text>
          </Box>
        </Box>
      </Box>
    </Stack>
  </Box>
}
