import React from 'react'
import { ScrollView, Text, useWindowDimensions } from 'react-native'
import { Stack, Box, Columns, Column, Tiles, useSpacing } from '@mobily/stacks'

import { Avatar } from 'components/Avatar'
import { Divider } from 'components/Divider'
import { Photo } from 'components/Photo'
import { Title } from 'components/Title'
import { Description } from 'components/Description'
import { Counter } from 'components/Counter'

import { styles } from './styles'

import { photos, avatars } from '../seeds'

export const Profile = () => {
  const { width } = useWindowDimensions()
  const spacing = useSpacing()
  const getTileHeight = (n: number) => (width - spacing(n) * 2 - spacing(2) * 3) / n

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
          <Text style={styles.highlight}>Photos</Text>
          <Tiles columns={4} space={2}>
            {photos.map((photo, index) => (
              <Photo key={index} source={photo} style={{ height: getTileHeight(4) * 0.75 }} />
            ))}
          </Tiles>
          <Text style={styles.highlight}>Followers</Text>
          <Tiles columns={8} space={2}>
            {avatars.map((photo, index) => (
              <Avatar key={index} source={photo} size={getTileHeight(8)} />
            ))}
          </Tiles>
        </Stack>
      </Box>
    </ScrollView>
  )
}
