export default class ReportsMediator {
    constructor() {
      this.formatters = {};
    }
  
    registerFormatter(name, formatter) {
      this.formatters[name] = formatter;
    }
  
    format(format, data) {
      if (!this.formatters[format]) {
        throw new Error(`Formato ${format} não registrado.`);
      }
      return this.formatters[format].output(data);
    }
  }
