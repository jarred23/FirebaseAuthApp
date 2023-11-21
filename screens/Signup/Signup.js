import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { firebase } from "../firebase";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      console.log("User registered successfully!");
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };

  return (
    <View>
      <Text>Email:</Text>
      <TextInput value={email} onChangeText={(text) => setEmail(text)} />
      <Text>Password:</Text>
      <TextInput
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Button title="Signup" onPress={handleSignup} />
    </View>
  );
};

export default Signup;
