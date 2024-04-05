import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { multiply, openPicker } from 'react-native-picture';


export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    // multiply(3, 7).then(setResult);
    openPicker({
      isExportThumbnail: true,
      maxVideo: 1,
      doneTitle: 'Xong',
      isCrop: true,
      usedCameraButton: false,
      singleSelectedMode: true,
    }).then((res) => {
      console.log(res);
    })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result}2</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
