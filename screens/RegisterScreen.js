import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, Input, Text } from "react-native-elements";
import { authentication } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "Back to login",
    });
  }, [navigation]);

  const register = () => {
    createUserWithEmailAndPassword(authentication, email, password)
      .then(() => {
        authentication.updateCurrentUser({
          displayName: name,
          photoURL:
            imageUrl ||
            "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <StatusBar style="light" />

      <Text h3 style={{ marginBottom: 50 }}>
        Create a Signal Account
      </Text>

      <View style={styles.inputContainer}>
        <Input
          placeholder="Full Name"
          autoFocus
          type="text"
          value={name}
          onChangeText={(userData) => {
            setName(userData);
          }}
        />

        <Input
          placeholder="Email"
          type="email"
          value={email}
          autoCapitalize="none"
          onChangeText={(userData) => {
            setEmail(userData);
          }}
        />

        <Input
          placeholder="Password"
          type="password"
          secureTextEntry
          value={password}
          onChangeText={(userData) => {
            setPassword(userData);
          }}
        />

        <Input
          placeholder="Profile Picture (optional)"
          type="text"
          value={imageUrl}
          onChangeText={(userData) => {
            setImageUrl(userData);
          }}
          onSubmitEditing={register}
        />
      </View>

      <Button
        containerStyle={styles.button}
        raised
        onPress={register}
        title="Register"
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    paddingTop: 5,
    backgroundColor: "#fff",
  },

  inputContainer: {
    width: 300,
  },

  button: {
    width: 200,
    marginTop: 10,
  },
});

export default RegisterScreen;
