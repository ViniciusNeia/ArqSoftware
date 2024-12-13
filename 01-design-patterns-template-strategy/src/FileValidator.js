import fs from 'node:fs';
import path from 'node:path';

export default class FileValidator {
  static validateFile(filename) {
    if (!fs.existsSync(filename)) {
      throw new Error(`Arquivo ${filename} não encontrado.`);
    }

    const ext = path.extname(filename);
    if (![".json", ".csv"].includes(ext)) {
      throw new Error(`Extensão ${ext} não suportada.`);
    }
  }
}