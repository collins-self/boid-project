import "./styles.css"

async function testWebGPU() {
    const canvas = document.querySelector('canvas');
    const adapter = await navigator.gpu.requestAdapter();
    if (!adapter) {
        throw new Error("WebGPU was not able to load in your browser.");
    }
    const device = await adapter.requestDevice();
    const queue = device.queue;
}
testWebGPU();
