import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../pages/Welcome/welcome.index';
import SignIn from '../pages/Signin/signin.index';
import Register from '../pages/Register/register.index';
import HomeUser from '../pages/HomeUser/homeuser.index';
import Tasks from '../pages/TasksUser/tasksuser.index';
import { TabActions } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Welcome}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="Register"
                component={Register}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="HomeUser"
                component={HomeUser}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="TasksUser"
                component={Tasks}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
}