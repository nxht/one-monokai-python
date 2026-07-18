import fs from 'node:fs/promises';
import { generateTheme } from './theme.ts';

const base_dir = './themes';

try {
  await fs.access(base_dir);
} catch (_err) {
  await fs.mkdir(base_dir);
}

Bun.write(
  `${base_dir}/one-monokai-python.json`,
  JSON.stringify(
    generateTheme({
      name: 'One Monokai Python',
      italic: true,
    }),
    null,
    2,
  ),
);

Bun.write(
  `${base_dir}/one-monokai-python-flat.json`,
  JSON.stringify(
    generateTheme({
      name: 'One Monokai Python Flat',
      italic: false,
    }),
    null,
    2,
  ),
);
