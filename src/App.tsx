import * as React from 'react';
import {StyleSheet, View} from 'react-native';

import {CharacterScreen} from '@features';

const App = () => {
    return (
        <View style={styles.appContainer}>
            <CharacterScreen />
        </View>
    );
};

const styles = StyleSheet.create({
    appContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
        backgroundColor: 'white',
        flex: 1,
    },
});

export default App;
