import {NativeBaseProvider, Box} from 'native-base';
import React from 'react';

const App = () => {
  return (
    <NativeBaseProvider>
      <Box>Hello world</Box>
    </NativeBaseProvider>
  );
};

export default App;
