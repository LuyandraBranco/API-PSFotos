import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Plus } from 'phosphor-react-native';

export function BtnAdd() {

    return (
        <View style={styles.container}>

            <TouchableOpacity>
                <View style={styles.itemMenu}>
                    <Plus size={24} color="white" />
                </View>
            </TouchableOpacity>

        </View>



    )
}