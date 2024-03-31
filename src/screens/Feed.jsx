import React from 'react';
import { Text, View, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { useStore } from '../store/store';
import { COLORS } from '../theme/theme';
import HeaderBar from '../components/HeaderBar';
const Feed = ({ params }) => {

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={COLORS.primaryBlackHex} />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewFlex}>
                <HeaderBar />
            </ScrollView>
        </View>
    )
}

export default Feed;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primaryBlackHex,
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollViewFlex: {
        flexGrow: 1
    }
})
