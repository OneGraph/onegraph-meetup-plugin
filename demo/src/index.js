import React, {Component} from 'react';
import {render} from 'react-dom';

import MeetupPlugin from '../../src';

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>onegraph-meetup-plugin Demo</h1>
        <MeetupPlugin />
      </div>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
