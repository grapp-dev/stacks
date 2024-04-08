import * as React from 'react';

import { Column, Columns, Stack } from '@grapp/stacks';

import { Placeholder } from '../../components/Placeholder';

const Example = () => {
  return (
    <Stack space={2}>
      <Columns space={2}>
        <Column flex="1/2">
          <Placeholder label="1/2" />
        </Column>
        <Column flex="1/2">
          <Placeholder label="1/2" />
        </Column>
      </Columns>

      <Columns space={2}>
        <Column flex="1/3">
          <Placeholder label="1/3" />
        </Column>
        <Column flex="1/3">
          <Placeholder label="1/3" />
        </Column>
        <Column flex="1/3">
          <Placeholder label="1/3" />
        </Column>
      </Columns>

      <Columns space={2}>
        <Column flex="2/3">
          <Placeholder label="2/3" />
        </Column>
        <Column flex="1/3">
          <Placeholder label="1/3" />
        </Column>
      </Columns>

      <Columns space={2}>
        <Column flex="1/4">
          <Placeholder label="1/4" />
        </Column>
        <Column flex="1/4">
          <Placeholder label="1/4" />
        </Column>
        <Column flex="1/4">
          <Placeholder label="1/4" />
        </Column>
        <Column flex="1/4">
          <Placeholder label="1/4" />
        </Column>
      </Columns>

      <Columns space={2}>
        <Column flex="1/4">
          <Placeholder label="1/4" />
        </Column>
        <Column flex="1/2">
          <Placeholder label="1/2" />
        </Column>
        <Column flex="1/4">
          <Placeholder label="1/4" />
        </Column>
      </Columns>

      <Columns space={2}>
        <Column flex="1/4">
          <Placeholder label="1/4" />
        </Column>
        <Column flex="3/4">
          <Placeholder label="3/4" />
        </Column>
      </Columns>

      <Columns space={2}>
        <Column flex="1/5">
          <Placeholder label="1/5" />
        </Column>
        <Column flex="2/5">
          <Placeholder label="2/5" />
        </Column>
        <Column flex="2/5">
          <Placeholder label="2/5" />
        </Column>
      </Columns>

      <Columns space={2}>
        <Column flex="1/5">
          <Placeholder label="1/5" />
        </Column>
        <Column flex="3/5">
          <Placeholder label="3/5" />
        </Column>
        <Column flex="1/5">
          <Placeholder label="1/5" />
        </Column>
      </Columns>

      <Columns space={2}>
        <Column flex="1/5">
          <Placeholder label="1/5" />
        </Column>
        <Column flex="4/5">
          <Placeholder label="4/5" />
        </Column>
      </Columns>
    </Stack>
  );
};

export default Example;
