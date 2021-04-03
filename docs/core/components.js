import React, { Fragment } from 'react'
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

// {isTs ? (
//   <>
//     <span style={{ marginLeft: 8 }}>|</span>
//     <img src={`/stacks/img/flowlogo.svg`} width={18} height={18} style={{ marginLeft: 8 }} />
//     <span style={{ marginLeft: 8, lineHeight: 1 }}>Flow</span>
//   </>
// ) : null}

export const TabLabel = props => {
  const { type } = props
  const isTs = type === 'ts'
  const label = isTs ? 'TypeScript' : 'ReScript'

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src={`/stacks/img/${type}logo.svg`} width={17} height={17} />
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
        <h3>
          <a
            aria-hidden="true"
            tabIndex="-1"
            className="anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-lib-next-theme-Heading-"
            id={name.toLowerCase()}
          />
          <code>{name}</code>
          <a className="hash-link" href={`#${name.toLowerCase()}`} title="Direct link to heading">
            #
          </a>
        </h3>
        <ul>
          <li>
            type:
            <ul>
              <li>
                <img
                  src="/stacks/img/tslogo.svg"
                  width={17}
                  height={17}
                  style={{ marginRight: 8, position: 'relative', top: 3 }}
                />
                <code>{rawTsType ? rawTsType : mapType(type)}</code>
              </li>
              <li>
                <img
                  src="/stacks/img/reslogo.svg"
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
      ]
        .filter(name => {
          return !omit.includes(name)
        })
        .map(name => {
          return {
            name,
            type: 'responsiveProps<float>',
            required: false,
          }
        })}
    />
  )
}
