import React from 'react';

const tools = [
  { name: 'Tabnine', description: 'AI assistant for software developers' },
  { name: 'Captain Stack', description: 'Code completion for VS Code' },
  { name: 'GPT-Code-Clippy (GPT-CC)', description: 'OpenAI GPT-3 based code completion' },
  { name: 'Second Mate', description: 'An open-source AI code assistant' },
  { name: 'IntelliCode', description: 'AI-assisted development for Visual Studio' },
  { name: 'Code Whisperer', description: 'Amazon\'s AI coding companion' },
  { name: 'Google ML-enhanced code completion', description: 'Code completion in Google Cloud Platform' },
  { name: 'YouCompleteMe', description: 'A code-completion engine for Vim' },
  { name: 'Kite (not maintained)', description: 'AI coding assistant (discontinued)' },
];

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white p-8">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold">IntelliAssist AI Code Completion Directory</h1>
        <p className="text-xl text-gray-400 mt-2">Your curated guide to the best AI coding tools.</p>
      </header>

      <main>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <h2 className="text-2xl font-bold mb-2">{tool.name}</h2>
              <p className="text-gray-400">{tool.description}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="text-center mt-12 text-gray-500">
        <p>&copy; 2025 IntelliAssist. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
