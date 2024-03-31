import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feed from '../screens/Feed';
import Notification from '../screens/Notification';
import Profile from '../screens/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import { COLORS } from '../theme/theme';

const Tab = createBottomTabNavigator();
function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBarStyle,
            }}>
            <Tab.Screen
                name="Feed"
                component={Feed}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => (
                        <MaterialCommunityIcons name="home" size={26} color={
                            focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
                        }
                        />
                    ),

                }}
            />
            <Tab.Screen
                name="search"
                component={Profile}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => (
                        <MaterialCommunityIcons name="magnify" color={
                            focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
                        } size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={Notification}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => (
                        <MaterialCommunityIcons name="bell" color={
                            focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
                        } size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="History"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <MaterialCommunityIcons name="account"
                            size={25}
                            color={
                                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
                            }
                        />
                    ),
                }}></Tab.Screen>
        </Tab.Navigator>
    );
}

export default TabNavigator

const styles = StyleSheet.create({
    tabBarStyle: {
        height: 80,
        position: 'absolute',
        backgroundColor: COLORS.primaryBlackRGBA,
        borderTopWidth: 0,
        elevation: 0,
        borderTopColor: 'transparent',
    },
    BlurViewStyles: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
});