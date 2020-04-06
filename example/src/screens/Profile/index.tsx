import React from 'react'
import { ScrollView, Text } from 'react-native'
import { Stack, Box, Columns, Column, Tiles } from '@mobily/stacks'

import { Avatar } from 'components/Avatar'
import { Divider } from 'components/Divider'
import { Photo } from 'components/Photo'
import { Title } from 'components/Title'
import { Description } from 'components/Description'
import { Counter } from 'components/Counter'

import { styles } from './styles'

import { photos } from '../seeds'

export const Profile = () => {
  return (
    <ScrollView>
      <Box padding={4}>
        <Stack space={4}>
          <Stack space={4} align="center">
            <Avatar source="https://randomuser.me/api/portraits/women/11.jpg" size={96} />
            <Stack space={1} align="center">
              <Title>Jenna Doe</Title>
              <Description>Photographer &amp; Artist</Description>
            </Stack>
            <Columns>
              <Column>
                <Stack space={1} align="center">
                  <Text style={styles.highlight}>Followers</Text>
                  <Counter>258</Counter>
                </Stack>
              </Column>
              <Column>
                <Stack space={1} align="center">
                  <Text style={styles.highlight}>Following</Text>
                  <Counter>346</Counter>
                </Stack>
              </Column>
            </Columns>
            <Divider />
          </Stack>
          <Tiles columns={4} space={2}>
            {photos.map((photo, index) => (
              <Box key={index} style={styles.photoHeight}>
                <Photo source={photo} />
              </Box>
            ))}
          </Tiles>
        </Stack>
      </Box>
    </ScrollView>
  )
}
