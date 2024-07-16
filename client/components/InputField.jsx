import React from "react";
import { View, Text, Image, TextInput, StyleSheet } from "react-native";

export default InputField = ({
  label,
  placeholder,
  icon,
  value,
  onChangeText,
  error,
  keyboardType = "default",
  secureTextEntry = false,
}) => (
  <View style={styles.inputContainer}>
    <Text style={styles.inputFieldText}>{label}</Text>
    <View style={styles.inputField}>
      <View style={styles.iconContainer}>
        <Image style={styles.icon} source={icon} />
      </View>
      <TextInput
        placeholder={placeholder}
        style={styles.textInput}
        placeholderTextColor="#676666"
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        defaultValue={value}
        onChangeText={onChangeText}
      />
    </View>
    {error && <Text style={styles.errorText}>{error}</Text>}
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 8,
  },
  inputField: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#374151",
    borderRadius: 10,
    padding: 8,
  },
  inputFieldText: {
    color: "white",
    fontSize: 18,
    marginBottom: 4,
  },
  textInput: {
    fontSize: 18,
    color: "white",
    paddingLeft: 18,
    flex: 1,
  },
  iconContainer: {
    width: 20,
    height: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    height: "100%",
    resizeMode: "contain",
    alignSelf: "flex-start",
  },
  countryCode: {
    fontSize: 18,
    color: "white",
    marginLeft: 8,
  },
  errorText: {
    color: "red",
    fontSize: 14,
    marginTop: 4,
  },
});
