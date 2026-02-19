import 'dotenv/config';
import { Langbase } from 'langbase';
import { readFile } from 'fs/promises';
import path from 'path';

const langbase = new Langbase({
    apiKey: process.env.LANGBASE_API_KEY!,
});

async function main() {
    const cwd = process.cwd();
    const memoryName = 'knowledge-basei-l';
    const langbaseFaq = await readFile(path.join(cwd, 'docs', 'langbase-faq.txt'));

    // Upload the doc to Langbase memory

    //Upload the demo FAQ document to the memory and print the success upload document message to the console.
    const faqResult = await langbase.memories.documents.upload({
        memoryName,
        contentType: 'text/plain',
        documentName: 'langbase-faq.txt',
        document: langbaseFaq,
        meta: { category: 'Support', topic: 'Langbase FAQs' },
    })
    console.log(faqResult.ok ? 'Document uploaded successfully' : 'Failed to upload document');
}
    
main()

