import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../pages/Global/Welcome/welcome.index';
import SignIn from '../pages/Global/Signin/signin.index';
import Register from '../pages/Global/Register/register.index';
import HomeUser from '../pages/User/HomeUser/homeuser.index';
import TasksUser from '../pages/User/TasksUser/tasksuser.index';
import ProfileUser from '../pages/User/ProfileUser/profileuser.index';
import DietUser from '../pages/User/DietUser/dietUser.index';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator screenOptions={{ animation: 'none' }}>
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
                component={TasksUser}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="ProfileUser"
                component={ProfileUser}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="DietUser"
                component={DietUser}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
}