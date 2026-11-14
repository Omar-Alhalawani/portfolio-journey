import { spawn } from 'node:child_process'

const incoming = process.argv.slice(2)
const args = ['dev']
for (let i = 0; i < incoming.length; i += 1) {
  if (incoming[i] === '--host') args.push('-H', incoming[++i])
  else if (incoming[i] === '--port') args.push('-p', incoming[++i])
  else if (incoming[i] !== '--strictPort') args.push(incoming[i])
}

const child = spawn(process.execPath, [new URL('../node_modules/next/dist/bin/next', import.meta.url).pathname, ...args], { stdio: 'inherit' })
child.on('exit', code => process.exit(code ?? 0))
