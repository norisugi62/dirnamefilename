import { fileURLToPath } from 'url';
import path from 'path';

const filename = () => {
  return fileURLToPath(import.meta.url);
}

const dirname = () => {
  const fn = filename();
  return path.dirname(fn);
}
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export { filename, dirname };
