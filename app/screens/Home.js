import React from "react";
import { Button, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";

const Home = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <View>
      <Text> Home </Text>
      <Button title="Đăng xuất" onPress={handleLogout} />
    </View>
  );
};

export default Home;
