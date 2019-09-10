import React, {Component} from 'react';
import {render} from 'react-dom';

import MeetupPlugin from '../../src';

class Demo extends Component {
  render() {
    return <MeetupPlugin />;
  }
}

render(<Demo />, document.querySelector('#demo'));
