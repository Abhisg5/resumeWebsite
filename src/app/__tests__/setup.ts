import "@testing-library/jest-dom";

// Mock canvas context
const mockContext = {
  save: jest.fn(),
  restore: jest.fn(),
  beginPath: jest.fn(),
  moveTo: jest.fn(),
  lineTo: jest.fn(),
  closePath: jest.fn(),
  fill: jest.fn(),
  stroke: jest.fn(),
  fillText: jest.fn(),
  measureText: jest.fn(() => ({ width: 100 })),
  createLinearGradient: jest.fn(() => ({
    addColorStop: jest.fn(),
  })),
  arc: jest.fn(),
  clearRect: jest.fn(),
  fillRect: jest.fn(),
  setTransform: jest.fn(),
  translate: jest.fn(),
  rotate: jest.fn(),
  scale: jest.fn(),
  getImageData: jest.fn(() => ({
    data: new Uint8ClampedArray(4),
  })),
  putImageData: jest.fn(),
  createImageData: jest.fn(() => ({
    data: new Uint8ClampedArray(4),
  })),
  drawImage: jest.fn(),
  globalAlpha: 1,
  fillStyle: "",
  strokeStyle: "",
  lineWidth: 1,
  textAlign: "left",
  textBaseline: "alphabetic",
} as unknown as CanvasRenderingContext2D;

// Create a mock canvas element
class MockCanvasElement extends HTMLElement {
  width = 800;
  height = 600;
  getContext() {
    return mockContext;
  }
  toDataURL() {
    return "data:image/png;base64,";
  }
}

// Register the mock canvas element
customElements.define("mock-canvas", MockCanvasElement);

// Mock HTMLCanvasElement
Object.defineProperty(window, "HTMLCanvasElement", {
  writable: true,
  value: MockCanvasElement,
});

// Mock requestAnimationFrame
let rafCallbacks: Array<FrameRequestCallback> = [];
global.requestAnimationFrame = (callback: FrameRequestCallback) => {
  rafCallbacks.push(callback);
  return 0;
};

// Mock cancelAnimationFrame
global.cancelAnimationFrame = () => {};

// Helper to run all pending animation frames
export const runAnimationFrames = () => {
  const callbacks = [...rafCallbacks];
  rafCallbacks = [];
  callbacks.forEach((callback) => callback(0));
};

// Reset all mocks before each test
beforeEach(() => {
  jest.clearAllMocks();
  rafCallbacks = [];
});
