import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingOne from "../components/OnboardingOne";
import OnboardingTwo from "../components/OnboardingTwo";
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer independent={true}>
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            options={{
              animation: "fade",
            }}
            name="OnboardingOne"
            component={OnboardingOne}
          />
          <Stack.Screen
            options={{ animation: "fade" }}
            name="OnboardingTwo"
            component={OnboardingTwo}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
