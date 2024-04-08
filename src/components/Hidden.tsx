import * as React from 'react';

import type { Breakpoint } from '../types';

export type HiddenProps = React.PropsWithChildren<{
  readonly above?: Breakpoint;
  readonly below?: Breakpoint;
}>;

export const Hidden = (_props: HiddenProps): JSX.Element => {
  throw new Error(
    '[Stacks] Logical expression for the `Hidden` component could not be handled. Open a new issue and provide reproduction code.',
  );
};
