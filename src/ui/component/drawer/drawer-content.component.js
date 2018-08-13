import React from 'react';
import {
    Text,
    View,
    StyleSheet,
} from "react-native";
import { DrawerItems } from 'react-navigation';

import { COLOR } from "../../shared/colors";

export const DrawerContentComponent = (props) => (
    <View style={styles.drawerContainer}>
        <View style={styles.drawerHeader}>
            <View style={styles.logoHeader}>
                <Text style={styles.logoText}>
                    7 Habits
                </Text>
            </View>
        </View>
        <View>
            <DrawerItems {...props} />
        </View>
    </View>
);

const styles = StyleSheet.create({
    drawerContainer: {
        flex: 1,
        backgroundColor: COLOR.GROUP,
    },
    drawerHeader: {
        height: 64,
        borderBottomColor: COLOR.SHADOW,
        borderBottomWidth: 1,
    },
    logoHeader: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingLeft: 16,
        paddingBottom: 6,
    },
    logoText: {
        fontSize: 20,
    }
});