import { runMemoryAgent } from "./agent";

async function main() {
    const chunks = await runMemoryAgent("How do I upgrade individual plan?");
    console.log(chunks);
}
    
main();