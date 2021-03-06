import React from 'react';

import * as ReactDOM from 'react-dom';
import { MockedProvider } from '@apollo/client/testing';

import mocks from '../__mocks__/graphqlMock';
import { Default as Thing } from '../stories/Thing.stories';

describe('Thing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MockedProvider mocks={mocks}>
        <Thing />
      </MockedProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
