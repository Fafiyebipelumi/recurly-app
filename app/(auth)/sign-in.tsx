import {View, Text} from 'react-native';
import {Link} from 'expo-router';

const SignIn = () => {
    return (
        <View>
            <Text>Login Page</Text>
            <Link href="/(auth)/sign-up" className="mt-4 p-3 bg-primary text-white rounded-md w-[50%]">Create an Account</Link>
        </View>
    )
}

export default SignIn;