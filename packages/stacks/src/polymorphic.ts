import type * as React from 'react';

type Merge<P1 = object, P2 = object> = Omit<P1, keyof P2> & P2;

type ComponentProps<ComponentType extends React.ElementType> = React.ComponentPropsWithRef<ComponentType>;

type PolymorphicProps<ComponentType extends React.ElementType, OwnProps> = Merge<
  Omit<ComponentProps<ComponentType>, 'as' | 'style'>,
  Omit<OwnProps, 'as' | 'style'> & {
    readonly as?: ComponentType;
    style?: ComponentProps<ComponentType>['style'];
  }
>;

export interface Polymorphic<
  DefaultComponentType extends React.ElementType,
  OwnProps = object,
  AllowedComponentType extends React.ElementType = React.ElementType,
> {
  displayName: string;
  (props: PolymorphicProps<DefaultComponentType, OwnProps>): React.ReactElement | null;
  <As extends AllowedComponentType>(
    props: Merge<
      Omit<ComponentProps<As>, 'as' | 'style'>,
      Omit<OwnProps, 'as' | 'style'> & {
        readonly as: As;
        style?: ComponentProps<As>['style'];
      }
    >,
  ): React.ReactElement | null;
}
