import FormaterHTML from './FormaterHTML.js';
import FormaterTXT from './FormaterTXT.js';
import FormaterCSV from './FormaterCSV.js';
import ReportsMediator from './ReportsMediator.js';

export default class ReportsFacade {
  constructor() {
    this.mediator = new ReportsMediator();
    this.mediator.registerFormatter('html', new FormaterHTML());
    this.mediator.registerFormatter('txt', new FormaterTXT());
    this.mediator.registerFormatter('csv', new FormaterCSV());
  }

  generateReport(filename, format) {
    try {
      return this.mediator.format(format, filename);
    } catch (error) {
      throw new Error(`Erro ao gerar relatório: ${error.message}`);
    }
  }
}
