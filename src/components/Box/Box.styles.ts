import { variants } from '../../variants'

export const resolveBoxStyle = variants({
  defaultVariants: {
    alignItems: undefined,
    justifyContent: undefined,
    flexDirection: undefined,
    flexWrap: undefined,
    flexBasis: undefined,
  },
  variants: {
    alignItems: {
      left: {
        alignItems: 'flex-start',
      },
      center: {
        alignItems: 'center',
      },
      right: {
        alignItems: 'flex-end',
      },
      stretch: {
        alignItems: 'stretch',
      },
      top: {
        alignItems: 'flex-start',
      },
      bottom: {
        alignItems: 'flex-end',
      },
      between: undefined,
      around: undefined,
      evenly: undefined,
    },
    justifyContent: {
      top: {
        justifyContent: 'flex-start',
      },
      center: {
        justifyContent: 'center',
      },
      bottom: {
        justifyContent: 'flex-end',
      },
      stretch: undefined,
      left: {
        justifyContent: 'flex-start',
      },
      right: {
        justifyContent: 'flex-end',
      },
      between: {
        justifyContent: 'space-between',
      },
      around: {
        justifyContent: 'space-around',
      },
      evenly: {
        justifyContent: 'space-evenly',
      },
    },
    flexDirection: {
      row: {
        flexDirection: 'row',
      },
      ['row-reverse']: {
        flexDirection: 'row-reverse',
      },
      column: {
        flexDirection: 'column',
      },
      ['column-reverse']: {
        flexDirection: 'column-reverse',
      },
    },
    flexWrap: {
      wrap: {
        flexWrap: 'wrap',
      },
      ['no-wrap']: {
        flexWrap: 'nowrap',
      },
      ['wrap-reverse']: {
        flexWrap: 'wrap-reverse',
      },
    },
    flexBasis: {
      content: {
        flex: 0,
        flexBasis: 'auto',
      },
      fluid: {
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: '0%',
      },
      ['1/2']: {
        flexBasis: '50%',
      },
      ['1/3']: {
        flexBasis: '33.3333%',
      },
      ['1/4']: {
        flexBasis: '25%',
      },
      ['2/3']: {
        flexBasis: '66.6667%',
      },
      ['3/4']: {
        flexBasis: '75%',
      },
      ['1/5']: {
        flexBasis: '20%',
      },
      ['2/5']: {
        flexBasis: '40%',
      },
      ['3/5']: {
        flexBasis: '60%',
      },
      ['4/5']: {
        flexBasis: '80%',
      },
    },
  },
  compoundVariants: [
    {
      variants: {
        alignItems: 'left',
        flexDirection: 'row-reverse',
      },
      style: {
        alignItems: 'flex-end',
      },
    },
    {
      variants: {
        alignItems: 'right',
        flexDirection: 'row-reverse',
      },
      style: {
        alignItems: 'flex-start',
      },
    },
    {
      variants: {
        alignItems: 'top',
        flexDirection: 'column-reverse',
      },
      style: {
        alignItems: 'flex-end',
      },
    },
    {
      variants: {
        alignItems: 'bottom',
        flexDirection: 'column-reverse',
      },
      style: {
        alignItems: 'flex-start',
      },
    },
    // --
    {
      variants: {
        justifyContent: 'left',
        flexDirection: 'row-reverse',
      },
      style: {
        justifyContent: 'flex-end',
      },
    },
    {
      variants: {
        justifyContent: 'right',
        flexDirection: 'row-reverse',
      },
      style: {
        justifyContent: 'flex-start',
      },
    },
    {
      variants: {
        justifyContent: 'top',
        flexDirection: 'column-reverse',
      },
      style: {
        justifyContent: 'flex-end',
      },
    },
    {
      variants: {
        justifyContent: 'bottom',
        flexDirection: 'column-reverse',
      },
      style: {
        justifyContent: 'flex-start',
      },
    },
  ],
})
