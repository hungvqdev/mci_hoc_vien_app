import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./app/screens/login";
import Home from "./app/screens/Home";
import { Provider, useSelector } from "react-redux";
import store from "./store";

const Stack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();

function Insidelayout() {
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen name="Home" component={Home} />
    </InsideStack.Navigator>
  );
}

function MainLayout() {
  const user = useSelector((state) => state.auth.user);

  return user ? <Insidelayout /> : <Login />;
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Main"
            component={MainLayout}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
