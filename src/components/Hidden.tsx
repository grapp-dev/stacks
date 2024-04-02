import * as React from 'react';

import { Breakpoint } from '../types';

type Props = React.PropsWithChildren<{
  readonly above?: Breakpoint;
  readonly below?: Breakpoint;
}>;

export const Hidden = (_props: Props): JSX.Element => {
  throw new Error(
    '[Stacks] Logical expression for the `Hidden` component could not be handled. Open a new issue and provide reproduction code.',
  );
};
