const fs = require('fs');
const glob = require('glob');
const path = require('path');

function run() {
  const cwd = process.cwd();
  const logs = glob.sync('vscode*.json', { cwd, absolute: true });

  if (!logs.length) {
    throw new Error(`No "vscode*.json" logs found in: ${cwd}`);
  } else if (logs.length > 1) {
    throw new Error(`Multiple "vscode*.json" logs found in: ${cwd}`);
  }

  const lines = fs.readFileSync(logs[0], 'utf-8').split('\n');

  for (const line of lines) {
    if (!line) continue;

    let data;

    try {
      data = JSON.parse(line);
    } catch {
      appendFile(path.resolve(process.cwd(), './traces/invalid.json'), line);
      continue;
    }

    if (!data || !data.tag) {
      appendFile(path.resolve(process.cwd(), './traces/unknown.json'), line);
      continue;
    }

    const [tag] = data.tag.split('.');
    appendFile(path.resolve(process.cwd(), `./traces/${tag}.json`), line);
  }

  console.log('done!');
}

function appendFile(file, content) {
  if (!fs.existsSync(file)) {
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, '', 'utf-8');
  }

  const contentWithNewline = content.endsWith('\n') ? content : `${content}\n`;
  fs.appendFileSync(file, contentWithNewline, 'utf-8');
}

run();
