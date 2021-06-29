
import React, { useState } from 'react'
import {
    KeyboardAvoidingView,
    Image,
    TextInput,
    TouchableOpacity,
    Text,
    StyleSheet,
    StatusBar
} from 'react-native';

import {signUp as register} from '../../services/Auth';
import Logo from '../../assets/logo-white.png';
import Colors from '../../styles/Colors';


const SignUp = ({ navigation }) => {
    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const [loading, setLoading] = useState(false);

    const onSubmit = async () =>{
        if(loading === false){
            setLoading(true);
            const {registerSuccess} = await register({
                email,
                password,
                name,
            });
            if(registerSuccess === true){
                navigation.reset({
                    index: 0,
                    key: null,
                    routes: [{name: 'Welcome'}]
                });
            }else{
                setLoading(false);
            }
        }
    }

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <StatusBar
                barStyle={"light-content"}
                backgroundColor={Colors.background}
            />
            <Image source={Logo}></Image>
            <TextInput
                style={styles.input}
                placeholder='Seu e-mail'
                placeholderTextColor={Colors.concrete}
                keyboardType='email-address'
                autoCapitalize='none'
                autoCorrect={false}
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <TextInput
                style={styles.input}
                placeholder='Seu nome'
                placeholderTextColor={Colors.concrete}
                keyboardType='email-address'
                autoCapitalize='words'
                value={name}
                onChangeText={text => setName(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Sua senha"
                placeholderTextColor={Colors.concrete}
                secureTextEntry
                autoCapitalize="none"
                autoCorrect={false}
                value={password}
                onChangeText={text => {
                    setPassword(text);
                }}
            />

            <TouchableOpacity
                onPress={onSubmit}
                style={styles.button}
            >
                <Text style={styles.buttonText}>{loading ? 'Carregando...' : 'Criar conta'}</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => { navigation.navigate('SignIn') }}
                style={styles.buttonSignUp}
            >
                <Text style={styles.buttonTextSignUp}>Já tem uma conta? Faça o login aqui</Text>
            </TouchableOpacity>

        </KeyboardAvoidingView>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.background,

    },
    input: {
        borderWidth: 1,
        borderColor: Colors.concrete,
        borderRadius: 20,
        backgroundColor: Colors.darkAsphalt,
        width: '80%',
        marginVertical: 10,
        paddingHorizontal: 20,
        height: 44,
        fontSize: 16,
        color: Colors.white,

    },
    button: {
        height: 44,
        width: "80%",
        backgroundColor: Colors.red,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginTop: 10,
    },
    buttonText: {
        color: Colors.light,
        fontWeight: 'bold',
        fontSize: 16,
    },
    buttonSignUp: {
        marginTop: 10,
    },
    buttonTextSignUp: {
        color: Colors.darkBlue,
        textDecorationLine: 'underline',
        fontSize: 16,
    },

});

export default SignUp
