import "@testing-library/jest-dom";

process.env.NODE_ENV = "test";

class IntersectionObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

global.IntersectionObserver = IntersectionObserverMock;
