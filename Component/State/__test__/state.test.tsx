import React from 'react';
import renderer from 'react-test-renderer';
import States from '..';




test('renders correctly', () => {
  const tree = renderer.create(<States/>).toJSON();
  expect(tree).toMatchSnapshot();
});