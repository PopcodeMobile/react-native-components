import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import ListItem from '../Components/ListItem';
import '@testing-library/jest-native/extend-expect';

describe('List Item', () => {
  test('with all text props', () => {
    const { getByText } = render(
      <ListItem
        leftTitle={'R$ 200,00'}
        leftSubtitle={'automática diária'}
        rightTitle={'10001'}
        rightSubtitle={'ativo'}
        datetime="26/02"
      />
    );

    expect(getByText('R$ 200,00')).toBeTruthy();
    expect(getByText('automática diária')).toBeTruthy();
    expect(getByText('10001')).toBeTruthy();
    expect(getByText('ativo')).toBeTruthy();
    expect(getByText('26/02')).toBeTruthy();
  });

  test('with onPress action', () => {
    const mockFn = jest.fn();
    const { getByTestId, getByA11yLabel } = render(
      <ListItem
        leftTitle={'R$ 200,00'}
        leftSubtitle={'automática diária'}
        rightTitle={'10001'}
        rightSubtitle={'ativo'}
        onPressItem={mockFn}
        accessibilityLabel="Botão de detalhes"
      />
    );
    expect(getByTestId('onPressIcon')).toBeTruthy();
    fireEvent.press(getByA11yLabel('Botão de detalhes'));
    expect(mockFn).toHaveBeenCalled();
  });
});
