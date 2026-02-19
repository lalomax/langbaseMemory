import 'dotenv/config';
import { Langbase } from 'langbase';

const langbase = new Langbase({
	apiKey: process.env.LANGBASE_API_KEY!,
});

async function main() {
	const memory = await langbase.memories.create({
		name: 'knowledge-baseiL',
		description: '',
		embedding_model: 'cohere:embed-multilingual-light-v3.0'
	})
	console.log("memory", memory)
}

main();