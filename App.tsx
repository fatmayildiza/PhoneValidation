import React from 'react';
import Home from './Home';

function App({value, language, errorColor, secureTextEntry}): JSX.Element {
  return (<Home 
        language={language} 
        value={(text)=>value(text)}
        errorColor={errorColor}
        secureTextEntry={secureTextEntry}
        />);
}

export default App;
