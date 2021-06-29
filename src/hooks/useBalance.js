import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {getBalance} from '../services/Balance';

const useBalance = () => {
    const [balance, setBalance] = useState();
    const navigation = useNavigation();

    useEffect(() => {
        const loadBalance = navigation.addListener('focus', async () =>{
            const value = await getBalance();
            setBalance(value);
        });
        return loadBalance;
    }, [navigation]);

    return [balance];
};

export default useBalance;