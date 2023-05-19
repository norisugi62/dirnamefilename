import { fileURLToPath } from 'url';
import path from 'path';

const fileName = () => {
  return fileURLToPath(import.meta.url);
}

const dirName = () => {
  return path.dirname(fileURLToPath(import.meta.url));
}

export { fileName, dirName };