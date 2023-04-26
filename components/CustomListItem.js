import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ListItem, Avatar } from 'react-native-elements'

const CustomListItem = () => {
  return (
    <ListItem key={id} bottomDivider>
        <Avatar
            rounded
            source={{
                uri:
                    "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png"}}
        />

        <ListItem.Content>
            <ListItem.Title style={{ fontWeight: '800', fontSize: 20, letterSpacing: 1}}>
                {chatName}
            </ListItem.Title>
            <ListItem.Subtitle numberOfLines={1} ellipsizeMode='tail'>
               ABC
            </ListItem.Subtitle>
        </ListItem.Content>
    </ListItem>

  )
}

const styles = StyleSheet.create({

});

export default CustomListItem;
