import * as React from 'react';

import { Breakpoint } from '../types';

type Props = React.PropsWithChildren<{
  readonly above?: Breakpoint;
  readonly below?: Breakpoint;
}>;

export const Hidden = (_props: Props): JSX.Element => {
  throw new Error('[Stacks] Babel plugin has not been configured.');
};
