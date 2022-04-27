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

const App = () => {
    return (
        <View style={styles.appContainer}>
            <Text>Hello World</Text>
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
