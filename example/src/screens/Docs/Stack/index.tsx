import React from 'react'
import { Stack } from '@mobily/stacks'
import { Placeholder } from 'components/Placeholder'

export const StackSpace1 = () => {
  return (
    <Stack space={1}>
      <Placeholder />
      <Placeholder />
      <Placeholder />
    </Stack>
  )
}

export const StackSpace2 = () => {
  return (
    <Stack space={4}>
      <Placeholder />
      <Placeholder />
      <Placeholder />
    </Stack>
  )
}

export const StackSpace3 = () => {
  return (
    <Stack space={8}>
      <Stack space={1}>
        <Placeholder />
        <Placeholder />
      </Stack>
      <Stack space={1}>
        <Placeholder />
        <Placeholder />
        <Placeholder />
      </Stack>
    </Stack>
  )
}

export const StackAlign1 = () => {
  return (
    <Stack space={1} align="center">
      <Placeholder width={120} />
      <Placeholder width={180} />
      <Placeholder width={240} />
    </Stack>
  )
}

export const StackAlign2 = () => {
  return (
    <Stack space={1} align="right">
      <Placeholder width={120} />
      <Placeholder width={180} />
      <Placeholder width={240} />
    </Stack>
  )
}
