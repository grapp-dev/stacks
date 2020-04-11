import React from 'react'
import { Columns, Column } from '@mobily/stacks'
import { Placeholder } from 'components/Placeholder'

export const ColumnsSpace1 = () => {
  return (
    <Columns space={1}>
      <Column>
        <Placeholder />
      </Column>
      <Column>
        <Placeholder />
      </Column>
      <Column>
        <Placeholder />
      </Column>
    </Columns>
  )
}

export const ColumnsSpace2 = () => {
  return (
    <Columns space={4}>
      <Column width="content">
        <Placeholder width={60} />
      </Column>
      <Column>
        <Placeholder />
      </Column>
      <Column width="content">
        <Placeholder width={60} />
      </Column>
    </Columns>
  )
}

export const ColumnsSpace3 = () => {
  return (
    <Columns space={8}>
      <Column>
        <Columns space={1}>
          <Column>
            <Placeholder />
          </Column>
          <Column>
            <Placeholder />
          </Column>
        </Columns>
      </Column>
      <Column>
        <Placeholder />
      </Column>
    </Columns>
  )
}

export const ColumnsAlignY1 = () => {
  return (
    <Columns space={1} alignY="center">
      <Column>
        <Placeholder height={180} />
      </Column>
      <Column>
        <Placeholder height={240} />
      </Column>
      <Column>
        <Placeholder height={120} />
      </Column>
    </Columns>
  )
}

export const ColumnsAlignY2 = () => {
  return (
    <Columns space={1} alignY="bottom">
      <Column>
        <Placeholder height={180} />
      </Column>
      <Column>
        <Placeholder height={240} />
      </Column>
      <Column>
        <Placeholder height={120} />
      </Column>
    </Columns>
  )
}

export const ColumnsAlignX1 = () => {
  return (
    <Columns space={1} alignX="center">
      <Column width="content">
        <Placeholder width={80} />
      </Column>
      <Column width="content">
        <Placeholder width={120} />
      </Column>
      <Column width="content">
        <Placeholder width={80} />
      </Column>
    </Columns>
  )
}

export const ColumnsAlignX2 = () => {
  return (
    <Columns alignX="around">
      <Column width="1/5">
        <Placeholder />
      </Column>
      <Column width="1/3">
        <Placeholder />
      </Column>
      <Column width="1/5">
        <Placeholder />
      </Column>
    </Columns>
  )
}
