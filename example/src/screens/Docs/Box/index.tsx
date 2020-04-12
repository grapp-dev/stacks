import React from 'react'
import { Box, Stack, Tiles, styles } from '@mobily/stacks'
import { Placeholder } from 'components/Placeholder'

export const Box1 = () => {
  return (
    <Box direction="row" padding={2}>
      <Box flex="fluid">
        <Box flex="fluid" alignX="center" alignY="center" style={styles.fullWidth}>
          <Placeholder width={160} height={160} />
        </Box>
      </Box>
      <Box flex="1/3">
        <Box marginBottom={5} style={styles.fullWidth}>
          <Stack space={1}>
            <Placeholder height={20} />
            <Placeholder height={20} />
            <Placeholder height={20} />
            <Placeholder height={20} />
          </Stack>
        </Box>
        <Box style={styles.fullWidth}>
          <Tiles columns={2} space={1}>
            <Placeholder height={50} />
            <Placeholder height={50} />
            <Placeholder height={50} />
            <Placeholder height={50} />
          </Tiles>
        </Box>
      </Box>
    </Box>
  )
}
