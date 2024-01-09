import { render } from '@testing-library/react-native';
import React from 'react';
import strings from '_localization';
import { withProviders } from '_test-utils';

const fakeStore = {
  error: {},
  status: {},
  user: {
    username: 'johndoe',
  },
};

describe('Base', () => {
  test('should render a welcome message with the user name', () => {
    const { getByText } = render(
      withProviders(<Base />, { initialState: fakeStore }),
    );

    expect(getByText(`${strings.home.message} johndoe`)).toBeTruthy();
  });
});
