#!/usr/bin/env node

void async function main() {
	const readline = require('readline')
	const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

	let success = 0
	let total = 0

	while (true) {
		const a = rnd(2, 9)
		const b = rnd(2, 9)

		const answer = await ask(rl, `${a} · ${b} = `)
		const r = Number(answer.trim())

		total++
		if (r === a * b) {
			process.stdout.write(`Ура!`)
			success++
		} else {
			process.stdout.write(`Ой....`)
		}
		process.stdout.write(`\t (правільна ${success} з ${total})\n`)
	}
}()

function rnd(low, high) {
	return Math.min(high, Math.floor(Math.random() * (high + 1 - low) + low))
}

function ask(rl, text) {
	return new Promise(resolve => rl.question(text, resolve))
}
