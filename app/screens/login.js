import React, { useState } from "react";
import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import authApi from "../../api/authApi";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../store/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState("");
  const dispatch = useDispatch();
  const signin = async () => {
    const data = {
      user_name: email,
      password: password,
    };
    setLoading(true);
    if (data.user_name === "" || data.password === "") {
      setLoading(false);
      setIsError("Tên đăng nhập hoặc mật khẩu không được để trống");
    } else {
      try {
        const response = await authApi.login(data);
        dispatch(loginSuccess(response));
      } catch (error) {
        console.log("error", error);
        setIsError("Thông tin tài khoản không đúng");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          source={require("../../assets/images/auth.png")}
          style={styles.image}
        />
        <TextInput
          value={email}
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          secureTextEntry={true}
          value={password}
          style={styles.input}
          placeholder="Password"
          autoCapitalize="none"
          onChangeText={(text) => setPassword(text)}
        />
        {isError !== "" && <Text style={styles.errorText}>{isError}</Text>}
        <Button title="Đăng nhập" onPress={() => signin()} disabled={loading} />
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
    justifyContent: "center",
  },
  input: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: "#fff",
  },
  image: {
    width: "auto",
    height: "auto",
  },
  errorText: {
    color: "red",
    marginVertical: 10,
    fontSize: 12,
    fontStyle: "italic",
  },
});
