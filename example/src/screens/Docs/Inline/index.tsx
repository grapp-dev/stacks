import React from 'react'
import { Inline } from '@mobily/stacks'
import { Placeholder } from 'components/Placeholder'

export const InlineSpace1 = () => {
  return (
    <Inline space={2}>
      <Placeholder height={60} width={90} />
      <Placeholder height={60} width={60} />
      <Placeholder height={60} width={120} />
      <Placeholder height={60} width={200} />
      <Placeholder height={60} width={100} />
      <Placeholder height={60} width={140} />
    </Inline>
  )
}

export const InlineSpace2 = () => {
  return (
    <Inline space={6}>
      <Inline space={2}>
        <Placeholder height={60} width={60} />
        <Placeholder height={60} width={90} />
      </Inline>
      <Inline space={2}>
        <Placeholder height={60} width={60} />
        <Placeholder height={60} width={90} />
      </Inline>
    </Inline>
  )
}

export const InlineAlign1 = () => {
  return (
    <Inline space={2} align="center">
      <Placeholder height={60} width={90} />
      <Placeholder height={60} width={60} />
      <Placeholder height={60} width={120} />
      <Placeholder height={60} width={100} />
      <Placeholder height={60} width={100} />
    </Inline>
  )
}

export const InlineAlign2 = () => {
  return (
    <Inline space={2} align="right">
      <Placeholder height={60} width={90} />
      <Placeholder height={60} width={60} />
      <Placeholder height={60} width={120} />
      <Placeholder height={60} width={100} />
      <Placeholder height={60} width={100} />
    </Inline>
  )
}
