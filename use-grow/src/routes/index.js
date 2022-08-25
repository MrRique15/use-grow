import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../pages/Welcome/welcome.index';
import SignIn from '../pages/Signin/signin.index';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
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
        </Stack.Navigator>
    );
}