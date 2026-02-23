import { runAiSupportAgent, runMemoryAgent } from "./agent";

// async function main() {
//     const chunks = await runMemoryAgent("How do I upgrade individual plan?");
//     console.log(chunks);
// }

async function main(){
    const query = 'Como puedo localizar a Orlando?';
    const chunks = await runMemoryAgent(query);

    const completion = await runAiSupportAgent({
        chunks,
        query,
    });
    console.log('completion',completion);
}
    
main();