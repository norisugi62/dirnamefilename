import { fileURLToPath } from 'url';
import path from 'path';

export const filename = () => {
  return fileURLToPath(import.meta.url);
}

export const dirname = () => {
  return path.dirname(fileURLToPath(import.meta.url));
}
