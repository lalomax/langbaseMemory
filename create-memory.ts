import 'dotenv/config';
import { Langbase } from 'langbase';

const langbase = new Langbase({
	apiKey: process.env.LANGBASE_API_KEY!,
});

async function main() {
	const memory = await langbase.memories.create({
		name: 'knowledge-baseiL',
		description: '',
		embedding_model: 'gemma-3-27b-it-q4_0' as any
	})
	console.log("memory", memory)
}

main();