import React from 'react';

export default class Sample extends React.Component {

    componentWillReceiveProps(newProps) {
        if (newProps.play) {
            this.audio.play();
        }
    }

    render() {
        return (
            <div className="sample">
                <audio id="audio" controls ref={(audio) => { this.audio = audio; }}>
                    <source id="source" src={this.props.sampleUrl} type="audio/ogg"/>
                </audio>
            </div>
        )
    }
}
