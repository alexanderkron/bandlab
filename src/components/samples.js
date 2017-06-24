import React from 'react';
import ReactDOM from 'react-dom'

import SampleClient from '../sample-client.js'
import Sample from './sample.js'

class Samples extends React.Component {
    constructor() {
        super();
        this.sampleClient = new SampleClient();
        this.state = {};
    }

    getSamples() {
        this.sampleClient.getSamples().then(samples => {
            this.setState(() => {
                return {
                    samples: samples,
                    play: false
                }
            });
        });
    }

    playSamples() {
        this.setState(() => {
            return {
                play: true
            }
        });
    }

    renderEmpty() {
        return <h4>No samples to jam to right now</h4>
    }

    renderSamples() {
        return this.state.samples.map((blob, idx) => {
            return <Sample key={idx} sampleUrl={URL.createObjectURL(blob)} play={this.state.play}/>
        });
    }

    render() {
        let samples;
        if (!this.state.samples) {
            samples = this.renderEmpty();
        } else {
            samples = this.renderSamples();
        }

        return (
            <div>
                <h1>Samples</h1>
                <button onClick={this.getSamples.bind(this)}>Get samples</button>
                {samples}
                <button onClick={this.playSamples.bind(this)} className={this.state.samples ? '' : 'hidden'}>
                    Play that hot track
                 </button>
            </div>
        );
    }
}

ReactDOM.render(
    <Samples/>,
    document.getElementById('root')
);
