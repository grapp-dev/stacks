import React, { Fragment } from 'react'
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'
import ResLogo from '../static/img/reslogo.svg'
import TsLogo from '../static/img/tslogo.svg'

export const TabLabel = props => {
  const { type } = props
  const isTs = type === 'ts'
  const label = isTs ? 'TypeScript' : 'ReScript'
  const Logo = isTs ? TsLogo : ResLogo

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Logo width={17} height={17} />
      <span style={{ marginLeft: 8, lineHeight: 1, fontSize: '0.95rem', paddingTop: 2 }}>
        {label}
      </span>
    </div>
  )
}

export const labels = [
  { label: <TabLabel type="ts" />, value: 'typescript' },
  { label: <TabLabel type="res" />, value: 'rescript' },
]

export const defaultTabsProps = {
  groupId: 'lang-tabs',
  defaultValue: 'typescript',
  values: labels,
}

const mapType = value => {
  return value
    .replace('responsiveProp', 'ResponsiveProp')
    .replace('ReactNative.View.ref', 'React.RefObject<View>')
    .replace('React.element', 'JSX.Element')
    .replace('float', 'number')
    .replace('int', 'number')
    .replace('bool', 'boolean')
    .replace(/#(\w+)/g, "'$1'")
    .replace(/f(\d{1})(\d{1})/g, '$1/$2')
    .replace('[', '')
    .replace(']', '')
}

export const Props = props => {
  const { data } = props

  return data.map(values => {
    const { name, type, required, defaultValue, rawTsType } = values

    return (
      <Fragment key={name}>
        <h4>
          <a
            aria-hidden="true"
            tabIndex="-1"
            className="anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-lib-next-theme-Heading-"
            id={name.toLowerCase()}
          />
          <code>{name}</code>
          <a className="hash-link" href={`#${name.toLowerCase()}`} title="Direct link to heading" />
        </h4>
        <ul>
          <li>
            type:
            <ul>
              <li>
                <TsLogo
                  width={17}
                  height={17}
                  style={{ marginRight: 8, position: 'relative', top: 3 }}
                />
                <code>{rawTsType ? rawTsType : mapType(type)}</code>
              </li>
              <li>
                <ResLogo
                  width={17}
                  height={17}
                  style={{ marginRight: 8, position: 'relative', top: 3 }}
                />
                <code>{type}</code>
              </li>
            </ul>
          </li>
          <li>
            required: <code>{required ? 'yes' : 'no'}</code>
          </li>
          {defaultValue ? (
            <li>
              default: <code>{defaultValue}</code>
            </li>
          ) : null}
        </ul>
      </Fragment>
    )
  })
}

export const BoxProps = props => {
  const { omit = [] } = props
  return (
    <Props
      data={[
        'padding',
        'paddingX',
        'paddingY',
        'paddingTop',
        'paddingBottom',
        'paddingLeft',
        'paddingRight',
        'paddingStart',
        'paddingEnd',
        'margin',
        'marginX',
        'marginY',
        'marginTop',
        'marginBottom',
        'marginLeft',
        'marginRight',
        'marginStart',
        'marginEnd',
        'viewRef',
      ]
        .filter(name => {
          return !omit.includes(name)
        })
        .map(name => {
          if (name === 'viewRef') {
            return {
              name,
              type: 'ReactNative.View.ref',
              required: false,
            }
          }

          return {
            name,
            type: 'responsiveProp<float>',
            required: false,
          }
        })}
    />
  )
}
