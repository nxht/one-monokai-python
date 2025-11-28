import fs from 'node:fs/promises';
import { generateTheme } from './theme.ts';

const theme = generateTheme();

const base_dir = './themes';

if (!fs.exists(base_dir)) {
  await fs.mkdir(base_dir);
}

Bun.write(
  `${base_dir}/one-monokai-python.json`,
  JSON.stringify(theme, null, 2),
);
