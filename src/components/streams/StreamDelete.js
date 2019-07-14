import React from 'react';
import { connect } from 'react-redux';

import { deleteStream, fetchStream } from '../../actions';
import Modal from '../Modal';

import history from '../../history';

class StreamDelete extends React.Component {

    componentDidMount() {
        const streamId = this.props.match.params.id;
        this.props.fetchStream(streamId);
    }

    renderContent() {
        if (!this.props.stream)
            return "Are you sure you want to delete this stream?";
        return `Are you sure you want to delete the stream ${this.props.stream.title} ?`;
    }

    render() {
        const streamId = this.props.match.params.id;
        const actions = (
            <>
                <button className="ui button" onClick={() => history.push('/')}>Cancel</button>
                <button className="ui primary button" onClick={() => this.props.deleteStream(streamId)}>Delete</button>
            </>
        );

        return (
            <Modal
                title="Delete a stream"
                content={this.renderContent()}
                actions={actions}
                onDismiss={() => history.push('')}
            />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const streamId = ownProps.match.params.id;
    return {
        stream: state.streams[streamId]
    };
}

export default connect(mapStateToProps, { deleteStream, fetchStream })(StreamDelete);