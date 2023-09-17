/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  useColorScheme,
  ScrollView,
} from 'react-native';

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text
          style={[
            isDarkMode ? styles.whiteText : styles.darkText,
            styles.biggerText,
          ]}>
          Hello love
        </Text>
        <Button title="Click Me" onPress={() => alert('Button Clicked!')} />
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.contentBox}>
          <Text style={styles.contentText}>Content 1</Text>
        </View>

        <View style={styles.contentBox}>
          <Text style={styles.contentText}>Content 2</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Footer Content</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  header: {
    alignItems: 'center',
  },
  whiteText: {
    color: 'white',
  },
  darkText: {
    color: 'black',
  },
  biggerText: {
    fontSize: 24,
    marginVertical: 10,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  contentBox: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 10,
  },
  contentText: {
    fontSize: 18,
    color: 'black',
  },
  footer: {
    marginTop: 20,
  },
  footerText: {
    fontSize: 16,
    color: 'gray',
  },
});

export default AppPro;
