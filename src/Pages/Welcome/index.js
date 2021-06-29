import React, { useState } from 'react'
import { StyleSheet, Image, View, StatusBar } from 'react-native'
import Colors from '../../styles/Colors';

import Logo from '../../assets/logo-white.png';

import {addEntry} from '../../services/Entries';
import useCategories from '../../hooks/useCategories';
import WelcomeMessage from './WelcomeMessage';
import WelcomeBalanceInput from './WelcomeBalanceInput';
import ActionFooter , {ActionPrimaryButton} from '../../components/Core/ActionFooter';
import {setInitialized} from '../../services/Welcome';

const Welcome = ({navigation}) => {
    const [ , , ,initCategory] = useCategories();
    const [amount, setAmount] = useState(0);

    const onSavePress = () => {
        addEntry({
            amount: amount,
            isInit: true,
            category: initCategory,
            entryAt: new Date(),
            latitude: null,
            longitude: null,
            address: null,
            photo: null,
        });
        setInitialized();
        navigation.navigate('Main');
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle='light-content' backgroundColor={Colors.background} />
            <View style={styles.logo}>
                <Image
                    source={Logo}
                />
            </View>
            <WelcomeMessage />
            <WelcomeBalanceInput value={amount} onChangeValue={setAmount} />
            <ActionFooter>
                <ActionPrimaryButton
                    title="Continuar"
                    onPress={onSavePress}
                />
            </ActionFooter>
        </View>   
    )
}

export default Welcome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        padding: 10,
    },
    logo: {
        alignItems: 'center',
        marginTop: 20,
    }


})
