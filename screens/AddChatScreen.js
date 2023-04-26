import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useLayoutEffect } from 'react'
import { Input, Icon, Button } from 'react-native-elements'
import { db } from '../firebase';

const AddChatScreen = ({navigation}) => {

    const [input, setInput] = useState("");

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Add a new chat',
            headerBackTitle: 'Chats'
        })
    }, [navigation])
    
    //firebase yeb check krna h
    const  createChat = async () => {
        await db
            .collection("chats")
            .add({
                chatName: input,
            })
            .then(() => {
                navigation.goBack();
            })
            .catch((error) => alert(error));
    };

    return (
    <View style={styles.container}>
      <Input placeholder='Enter a chat name'
        value={input}
        onChangeText={(userData) => setInput(userData)}
        onSubmitEditing={createChat}
        leftIcon={
            <Icon name='wechat' type='antdesign' size={24} color='black'/>
        }
      />
      <Button onPress={createChat} title='Create new Chat'/>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 30,
        height: '100%',
    },
});

export default AddChatScreen;
