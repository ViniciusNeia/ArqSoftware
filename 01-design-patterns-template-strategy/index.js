import ReportsFacade from './src/ReportsFacade.js';
import CitiesReporter from './src/CitiesReporter.js';

const facade = new ReportsFacade();
const reporter = new CitiesReporter();

const [cmd, script, param1] = process.argv;
const filename = './data/cidades-2.json';

if (!['html', 'txt', 'csv'].includes(param1)) {
  console.error("Formato não suportado. Use 'html', 'txt' ou 'csv'.");
  process.exit(1);
}

const data = reporter._parseJSON(reporter._read(filename));
console.log(`Relatorio Formatado para ${param1.toUpperCase}`);
console.log(facade.generateReport(data, param1));
