import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { openPicker } from 'react-native-picture';


export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {

  }, []);

  const onPress = () => {
    openPicker({
      isCrop: true,             // 是否允许裁剪，默认false, maxCount 为1才生效
      maxCount: 1,             // 最大选择图片数目，默认6
      isCamera: true,
    }).then((res) => {
      console.log(res);
    })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <View style={styles.container}>
      <Text onPress={onPress}>open</Text>
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
