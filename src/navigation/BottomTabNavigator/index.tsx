import HomeScreen from "../../screens/Home";
import Portfolio from "../../screens/Portfolio";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesomeIcons from "react-native-vector-icons/FontAwesome";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Header } from "../../components/Header";
import Text from "../../components/Text";

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#2c53f6",
        tabBarStyle: {
          height: 80,
          backgroundColor: "white",
        },
        header: ({ navigation, options, route }) => {
          return <Header title={options.tabBarLabel} />;
        },
        tabBarIconStyle: {
          marginTop: 15,
        },
        tabBarLabelStyle: {
          marginBottom: 15,
          fontFamily: "Poppins-Medium",
          fontSize: 14,
        },
      }}
    >
      <Tab.Screen
        name="Portfolio"
        options={{
          tabBarLabel: "PortFolio",
          tabBarIcon: ({ color }) => {
            return (
              <MaterialCommunityIcons
                name="chart-pie"
                color={color}
                size={26}
              />
            );
          },
        }}
        component={Portfolio}
      />
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: "Merkets",
          tabBarIcon: ({ color }) => {
            return (
              <MaterialCommunityIcons
                name="chart-line"
                color={color}
                size={26}
              />
            );
          },
        }}
        component={HomeScreen}
      />

      <Tab.Screen
        name="News"
        options={{
          tabBarLabel: "News",
          tabBarIcon: ({ color }) => {
            return (
              <FontAwesomeIcons name="newspaper-o" color={color} size={26} />
            );
          },
        }}
        component={NewsElement}
      />
    </Tab.Navigator>
  );
};

const NewsElement = () => {
  return <Text style={{ fontSize: 30 }}>Not implemented!!</Text>;
};
