import * as React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import {CharacterList} from './components';

const App = () => {
    return (
        <View style={styles.appContainer}>
            <CharacterList />
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
