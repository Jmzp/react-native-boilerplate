import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { BottomHalfMenu, ButtonLinearGradient } from '_components/index';
import strings from '_localization';
import Button from '_components/Button';
import { TextStyles } from '_theme';
import { useStores } from '_@shared/stores';

const styles = StyleSheet.create({
  logoutModalContainer: {
    marginTop: 45,
    marginHorizontal: 29,
  },
  logoutTitle: {
    ...TextStyles.boldText,
    fontSize: 19,
    lineHeight: 23,
    color: '#71758B',
    marginBottom: 15,
  },
  logoutMessage: {
    ...TextStyles.regularText,
    fontSize: 14,
    lineHeight: 17,
    color: '#71758B',
  },
  logoutButtonsContainer: {
    flexDirection: 'row',
    marginTop: 30,
  },
  logoutButtonCancel: {
    flex: 1,
    borderColor: '#04AEAB',
    borderRadius: 5,
    borderWidth: 0.86,
    height: 42,
    marginRight: 23,
  },
  logoutButtonCancelText: {
    ...TextStyles.poppinsBoldText,
    fontSize: 12,
    lineHeight: 18,
    color: '#04AEAB',
  },
  logoutButtonYes: {
    flex: 1,
    borderRadius: 5,
  },
  logoutButtonYesText: {
    ...TextStyles.poppinsBoldText,
    fontSize: 12,
    lineHeight: 18,
  },
});

const LogoutModal = (props) => {
  const { isLogoutModalVisible, closeLogoutModal } = props;

  const { userStore } = useStores();

  const logoutUser = () => {
    closeLogoutModal();
    userStore.logout();
  };

  return (
    <BottomHalfMenu
      isModalVisible={isLogoutModalVisible}
      close={closeLogoutModal}
      disableBackClose
      disableSwipe
    >
      <View style={styles.logoutModalContainer}>
        <Text style={styles.logoutTitle}>{strings.logoutModal.logout}</Text>
        <Text style={styles.logoutMessage}>{strings.logoutModal.logoutMessage}</Text>
        <View style={styles.logoutButtonsContainer}>
          <Button
            style={styles.logoutButtonCancel}
            textStyle={styles.logoutButtonCancelText}
            title={strings.logoutModal.cancel}
            onPress={closeLogoutModal}
          />
          <ButtonLinearGradient
            title={strings.logoutModal.yesLogout}
            containerStyle={styles.logoutButtonYes}
            textStyle={styles.logoutButtonYesText}
            onPress={logoutUser}
          />
        </View>
      </View>
    </BottomHalfMenu>
  );
};

LogoutModal.propTypes = {
  isLogoutModalVisible: PropTypes.bool.isRequired,
  closeLogoutModal: PropTypes.func.isRequired,
};

export default LogoutModal;
