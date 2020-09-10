import React from 'react';
import { render } from '@testing-library/react-native';

import SummaryBox from '../Components/SummaryBox';
import '@testing-library/jest-native/extend-expect';

describe('SummaryBox', () => {
  test('with label and text', () => {
    const { getByText, getByA11yLabel } = render(
      <SummaryBox label="Label" text="Text" />
    );

    expect(getByA11yLabel('Label: Text')).toBeTruthy();
    expect(getByText('Label')).toBeTruthy();
    expect(getByText('Text')).toBeTruthy();

    expect(getByA11yLabel('Label: Text')).toHaveStyle([
      {
        height: 48,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: 'rgba(195, 204, 210, 0.45)',
      },
    ]);
  });
});
