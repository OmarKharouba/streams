import React from 'react';
import { connect } from 'react-redux';

import { fetchStream } from '../../actions';

class StreamShow extends React.Component {

    componentDidMount() {
        const streamId = this.props.match.params.id;
        this.props.fetchStream(streamId);
    }

    render() {
        if (!this.props.stream)
            return <div>Loading...</div>
        return (
            <div>
                <h1>
                    {this.props.stream.title}
                </h1>
                <h5>

                </h5>
                {this.props.stream.description}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const streamId = ownProps.match.params.id;
    return {
        stream: state.streams[streamId]
    }
}

export default connect(mapStateToProps, { fetchStream })(StreamShow);