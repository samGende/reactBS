import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

const PizzaTranslator = (props) => {
  const [text, setText] = useState('');
  return (
    <View style={{padding: 10}}>
       <Text>{props.label}</Text>
    
      <TextInput
        style={{height: 40}}
        placeholder="Type he to translate!"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
        onSubmitEditing={() => alert(text)}
      />
    </View>
  );
}

export default PizzaTranslator;