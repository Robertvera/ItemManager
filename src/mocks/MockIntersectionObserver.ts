/* eslint-disable class-methods-use-this */

export default class {
    readonly root: Element | null;

    readonly rootMargin: string;

    readonly thresholds: ReadonlyArray<number>;

    constructor() {
      this.root = null;
      this.rootMargin = '20px';
      this.thresholds = [0];
    }

    disconnect() {}

    observe() {}

    takeRecords(): IntersectionObserverEntry[] {
      return [];
    }

    unobserve() {}
}