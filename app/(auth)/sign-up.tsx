import {View, Text} from 'react-native';
import {Link} from 'expo-router';

const SignUp = () => {
    return (
        <View>
            <Text>SignUp Page</Text>
            <Link href="/(auth)/sign-in" className="mt-4 p-3 bg-primary text-white rounded-md w-[50%]">Go to Login</Link>
        </View>
    )
}

export default SignUp;