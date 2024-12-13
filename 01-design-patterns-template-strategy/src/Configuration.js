export default class Configuration {
  constructor() {
    if (Configuration._instance) {
      return Configuration._instance;
    }
    Configuration._instance = this;
  }

  getConfiguration() {
    return {
      suportedFormats: ['html', 'txt', 'csv']
    };
  }
}
