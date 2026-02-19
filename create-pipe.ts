import 'dotenv/config';
import { Langbase } from 'langbase';

const langbase = new Langbase({
    apiKey: process.env.LANGBASE_API_KEY!,
});

async function main() {
    const supportAgent = await langbase.pipes.create({
        name: 'ai-support-agent',
        description: 'An AI agent to support users with their queries.',
        messages : [{
            role: 'system',
            content: 'You are an AI agent to support users with their queries.'
        }]
    })
    console.log('Support agent',supportAgent);
}

main();