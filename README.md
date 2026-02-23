# Langbase Memory

A TypeScript project that demonstrates how to build an AI-powered support agent using Langbase's memory and pipe capabilities. This project creates a knowledge base from documentation and allows users to query it using natural language.

## Overview

This project implements a RAG (Retrieval-Augmented Generation) system that:
- Creates a memory store for knowledge base documents
- Uploads documentation to the memory store
- Provides an AI agent that can answer questions based on the stored knowledge
- Includes retry logic for handling rate limiting

## Features

- **Memory Management**: Create and manage Langbase memory stores
- **Document Upload**: Upload text documents to the knowledge base
- **AI Agent**: Query the knowledge base using natural language
- **Error Handling**: Robust error handling with retry logic for API rate limits
- **Source Citation**: Responses include source citations with document references

## Prerequisites

- Node.js (v18 or higher)
- Langbase API key
- OpenRouter API key (configured on Langbase.com)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd langbaseMemory
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Add your Langbase API key to `.env`:
```
LANGBASE_API_KEY=your_langbase_api_key_here
```

5. Configure OpenRouter API key on [Langbase.com](https://langbase.com) for the 'ai-support-agent' pipe.

## Project Structure

```
langbaseMemory/
├── agent.ts              # Core AI agent and memory retrieval functions
├── index.ts              # Main application entry point
├── create-memory.ts      # Script to create memory store
├── create-pipe.ts        # Script to create AI agent pipe
├── upload-docs.ts        # Script to upload documentation
├── docs/
│   └── langbase-faq.txt  # Sample knowledge base document
├── .env                  # Environment variables
└── package.json          # Project dependencies
```

## Usage

### 1. Create Memory Store

Create a memory store to hold your knowledge base:

```bash
npx tsx create-memory.ts
```

### 2. Create AI Agent Pipe

Create the AI agent pipe that will process queries:

```bash
npx tsx create-pipe.ts
```

### 3. Upload Documentation

Upload your documentation to the memory store:

```bash
npx tsx upload-docs.ts
```

### 4. Run the Application

Query the knowledge base:

```bash
npx tsx index.ts
```

The application will:
1. Retrieve relevant document chunks based on the query
2. Generate a response using the AI agent
3. Provide citations for the source documents

## API Reference

### Core Functions

#### `runMemoryAgent(query: string)`
Retrieves relevant document chunks from the memory store based on the query.

#### `runAiSupportAgent({ chunks, query })`
Processes the query using retrieved context and generates an AI response with citations.

### Configuration

- **Memory Name**: `knowledge-base-1` (configurable in `agent.ts`)
- **Pipe Name**: `ai-support-agent`
- **Embedding Model**: `gemma-3-27b-it-q4_0`
- **Top-K Results**: 4 (number of relevant chunks to retrieve)

## Error Handling

The application includes robust error handling:

- **Rate Limiting**: Automatic retry with exponential backoff (3 retries)
- **API Errors**: Proper error propagation and logging
- **Missing Configuration**: Clear error messages for missing API keys

## Example Output

```bash
completion Based on the documentation, to upgrade an individual plan:

[1] You can upgrade your individual plan by navigating to the account settings and selecting the upgrade option.

Sources:
[1] langbase-faq.txt
```

## Development

### Scripts

- `npm test` - Placeholder for tests (currently not implemented)
- `npx tsx <file>.ts` - Run any TypeScript file directly

### Dependencies

- `langbase`: ^1.2.4 - Langbase SDK for memory and pipe operations
- `dotenv`: ^17.3.1 - Environment variable management

## Troubleshooting

### Common Issues

1. **"Missing LLM API key for 'OpenRouter'"**
   - Solution: Add your OpenRouter API key on Langbase.com dashboard

2. **"Error from OpenRouter: 429 Provider returned error"**
   - Solution: The application includes automatic retry logic. If persistent, check your OpenRouter usage limits

3. **Memory not found**
   - Solution: Ensure you've run `create-memory.ts` and the memory name matches in `agent.ts`

## License

ISC

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request
