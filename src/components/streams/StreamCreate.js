import React from 'react';
import { connect } from 'react-redux';

import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {
    render(){
        return (
            <StreamForm onSubmit={this.props.createStream} title="Create Stream" stream={{}} />
        );
    }
}

export default connect(null, {createStream})(StreamCreate);
