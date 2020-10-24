import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, TextInput } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

export default function InitialPage(props) {
  const [value, onChangeText] = React.useState('');
 
    return (
      <SafeAreaView style={styles.container}>
        <View>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => onChangeText(text)}
          value={value}
          placeholder='Digite seu ingrediente:'
          />
          <Button
            title="Press me"
            color="#f194ff"
            onPress={() => props.navigation.navigate('Resultado')}
          />
      </View>
      <Separator />
    </SafeAreaView>
)};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});