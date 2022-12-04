/* eslint-disable functional/immutable-data */

/* eslint-disable functional/prefer-readonly-type */
/* eslint-disable functional/no-loop-statement */
/* eslint-disable functional/no-conditional-statement */

import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { A, D, G } from '@mobily/ts-belt'

type Style = ViewStyle | TextStyle | ImageStyle

export type Variants = Record<string, Record<string, Style | undefined>>
export type VariantPropsOf<T> = T extends (props: infer P) => any ? NonNullable<P> : never

export interface VariantsConfig<V extends Variants> {
  readonly base?: Style
  readonly variants: V
  readonly compoundVariants?: readonly CompoundVariant<V>[]
  readonly defaultVariants?: Partial<OptionsOf<V>>
}

export interface CompoundVariant<V extends Variants> {
  readonly variants: Partial<OptionsOf<V>>
  readonly style: Style
}

type BooleanVariants<V extends Variants> = {
  readonly [K in keyof V as V[K] extends { readonly true: any } | { readonly false: any }
    ? K
    : never]: V[K]
}

type DefaultVariants<C extends VariantsConfig<V>, V extends Variants = C['variants']> = {
  readonly [K in keyof V as K extends keyof C['defaultVariants'] ? K : never]: C['variants'][K]
}

type OptionalVariantNames<C extends VariantsConfig<V>, V extends Variants = C['variants']> =
  | keyof BooleanVariants<V>
  | keyof DefaultVariants<C>

type OptionalOptions<C extends VariantsConfig<V>, V extends Variants = C['variants']> = {
  readonly [K in keyof V as K extends OptionalVariantNames<C> ? K : never]?: OptionsOf<V>[K]
}

type RequiredOptions<C extends VariantsConfig<V>, V extends Variants = C['variants']> = {
  readonly [K in keyof V as K extends OptionalVariantNames<C> ? never : K]: OptionsOf<V>[K]
}

type OptionsOf<V extends Variants> = {
  readonly [K in keyof V]: keyof V[K] extends 'true' | 'false' ? boolean : keyof V[K]
}

type VariantOptions<
  C extends VariantsConfig<V>,
  V extends Variants = C['variants'],
> = RequiredOptions<C> & OptionalOptions<C>

type Simplify<T> = {
  readonly [K in keyof T]: T[K]
}

export const variants = <C extends VariantsConfig<V>, V extends Variants = C['variants']>(
  config: Simplify<C>,
) => {
  const { defaultVariants } = config

  const base = config.base ? StyleSheet.create({ root: config.base }) : undefined
  const variants = D.map(config.variants, variant => {
    return variant ? StyleSheet.create(variant as Record<string, Style>) : undefined
  })
  const compoundVariants = A.map(config.compoundVariants ?? [], value => {
    return D.set(value, 'style', StyleSheet.create({ root: value.style }))
  })

  const isBooleanVariant = (name: keyof V) => {
    const variant = variants?.[name]
    return variant && typeof variant === 'string' && (variant === 'true' || variant === 'false')
  }

  return <T extends Style>(props: VariantOptions<C> = {} as VariantOptions<C>) => {
    const result = [base?.root]

    const getSelected = (name: keyof V) =>
      (props as any)[name] ??
      defaultVariants?.[name] ??
      (isBooleanVariant(name) ? false : undefined)

    for (const name in variants) {
      const selected = getSelected(name)

      if (selected !== undefined) {
        result.push(variants[name]?.[selected])
      }
    }

    for (const { variants, style } of compoundVariants) {
      const isSelected = Object.keys(variants).every(name => getSelected(name) === variants[name])

      if (isSelected) {
        result.push(style.root)
      }
    }

    return A.reject(result, G.isNullable) as NonNullable<T>[]
  }
}
