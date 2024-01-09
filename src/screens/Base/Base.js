import React from 'react';
import { useTheme } from 'react-native-paper';
import { Button, Text, View } from 'react-native';
import { observer } from 'mobx-react';
import styles from '_screens/Base/Base.styles';
import { TextStyles } from '_theme';
import { useStores } from '_@shared/stores';

const Base = () => {
  const { colors } = useTheme();

  const { userStore, errorStore } = useStores();

  const addError = () => {
    errorStore.setCurrentError(errorStore.currentError + '\n' + 'New Error');
  };

  const logOut = async () => {
    await userStore.logout();
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={[TextStyles.lightTitle, { color: colors.text }]}>Hola Mundo</Text>
      <Text style={TextStyles.error}>{errorStore.currentError}</Text>
      <Button onPress={addError} title={'Append Error'} />
      <Button title={'Log Out'} onPress={logOut} />
    </View>
  );
};

export default observer(Base);
