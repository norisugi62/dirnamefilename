import { fileURLToPath } from 'url';
import path from 'path';

const filename = () => {
  return fileURLToPath(import.meta.url);
}

const dirname = () => {
  return path.dirname(filename());
}

export { filename, dirname };
