import ReportsFacade from './src/ReportsFacade.js';
import CitiesReporter from './src/CitiesReporter.js';

const arquivo = './data/cidades-2.json';
const facade = new ReportsFacade();
const reporter = new CitiesReporter();

try {
  const cities = reporter._parseJSON(reporter._read(arquivo));
  
  console.log("Relatório HTML:");
  console.log(facade.generateReport(cities, 'html'));

  console.log("\nRelatório TXT:");
  console.log(facade.generateReport(cities, 'txt'));

  console.log("\nRelatório CSV:");
  console.log(facade.generateReport(cities, 'csv'));

} catch (error) {
  console.error("Erro:", error.message);
}