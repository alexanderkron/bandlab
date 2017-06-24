export default class SampleClient {
    constructor() {
        this.SAMPLE_ENDPOINTS = [
            'https://static.bandlab.com/soundbanks/previews/new-wave-kit.ogg',
            'https://static.bandlab.com/soundbanks/previews/synth-organ.ogg',
        ]

        this.samples = [];
    }

    getSamples() {
        if (this.samples.length) {
            return Promise.resolve(this.samples);
        }

        const samplePromises = [];
        for (let sampleEndpoint of this.SAMPLE_ENDPOINTS) {
            samplePromises.push(
                fetch(sampleEndpoint).then(response => {
                    return response.blob();
                })
            );
        }
        return Promise.all(samplePromises);
    }
}
