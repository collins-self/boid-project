import "./styles.css"

const canvas = document.querySelector('canvas');

// initialize GPU adapter needed for device access
const adapter = await navigator.gpu.requestAdapter();
if (!adapter) {
    throw new Error("WebGPU was not able to load in your browser.");
}

// device used for interfacing with the GPU
const device = await adapter.requestDevice();
const queue = device.queue;

// configure the Canvas
// todo:  come back and learn more about the config options
const context = canvas.getContext("webgpu");
context.configure({
    device,
    format: navigator.gpu.getPreferredCanvasFormat(),
    alphaMode: 'opaque',
});

const texture = context.getCurrentTexture();
const textureView = texture.createView();