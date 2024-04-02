/* eslint-disable react-native/no-color-literals */
import * as React from 'react';
import { ScrollView as RNScrollView, ScrollViewProps } from 'react-native';
import { createStyleSheet, UnistylesRuntime, useStyles } from 'react-native-unistyles';

import {
  Box,
  ResponsiveProp,
  Row,
  RowProps,
  Rows,
  RowsProps,
  useResponsiveProp,
  useSpacingHelpers,
} from '@grapp/stacks';

type ContextProps = {
  readonly paddingX: number;
};

type Props = React.PropsWithChildren<Omit<RowProps, 'paddingX'>>;

type ScreenProps = Omit<RowsProps, 'paddingTop' | 'paddingBottom'> & {
  readonly topInset?: ResponsiveProp<number>;
  readonly bottomInset?: ResponsiveProp<number>;
};

const Context = React.createContext<ContextProps>({
  paddingX: 4,
});

const useScreen = () => {
  return React.useContext(Context);
};

export const Screen = (props: ScreenProps) => {
  const {
    children,
    paddingX = 4,
    backgroundColor = '#fff',
    topInset,
    bottomInset,
    ...rest
  } = props;

  const { divide } = useSpacingHelpers();

  const resolveResponsiveProp = useResponsiveProp();
  const paddingTop = resolveResponsiveProp(topInset) ?? divide(UnistylesRuntime.insets.top);
  const paddingBottom =
    resolveResponsiveProp(bottomInset) ?? divide(UnistylesRuntime.insets.bottom);

  return (
    <Context.Provider value={{ paddingX: resolveResponsiveProp(paddingX) }}>
      <Rows
        backgroundColor={backgroundColor}
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        {...rest}
      >
        {children}
      </Rows>
    </Context.Provider>
  );
};

const Content = Row.from<Props>(props => {
  const { paddingX } = useScreen();
  return <Box paddingX={paddingX} {...props} />;
});

const ScrollView = Row.from<Props & ScrollViewProps>(props => {
  const { children, contentContainerStyle, flex = 'fluid', horizontal } = props;
  const { paddingX } = useScreen();
  const { multiply } = useSpacingHelpers();
  const { styles } = useStyles(stylesheet);

  return (
    <Box flex={flex}>
      <RNScrollView
        horizontal={horizontal}
        contentContainerStyle={[
          styles.scrollContainer,
          contentContainerStyle,
          { paddingHorizontal: multiply(paddingX) },
        ]}
      >
        {children}
      </RNScrollView>
    </Box>
  );
});

const stylesheet = createStyleSheet({
  scrollContainer: {
    flexGrow: 1,
  },
});

Screen.Content = Content;
Screen.ScrollView = ScrollView;
