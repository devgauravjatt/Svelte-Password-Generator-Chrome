# Svelte Password Generator Chrome Extension

This project creates a **Password Generator Chrome Extension** using **Svelte** and **Vite**. The extension helps generate strong, random passwords for users, and it's easy to integrate into Chrome.

## How to Build the Project

Follow these steps to clone, install dependencies, and build the password generator extension.

### 1. Clone the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/yourusername/password-generator-extension.git
```

### 2. Install Dependencies

Navigate to the project folder and install the necessary dependencies:

```bash
cd password-generator-extension
npm install
```

### 3. Install TypeScript & TSX

To enable TypeScript support and run the TypeScript CLI (`tsx`), you will need to install `tsx` globally:

```bash
npm install -g tsx
```

### 4. Build the Project

Run the build command to compile the Svelte app using Vite:

```bash
npm run build
```

### 5. Run the TypeScript CLI

Now, you can run the TypeScript CLI using `tsx`:

```bash
tsx cli.ts
```

This will start the CLI logic for the extension.

### 6. Deploy and Load into Chrome

Once the build is complete, you'll find the extension files in the `/build` directory. You can now load the extension into Chrome:

1. Open **Chrome** and go to `chrome://extensions/`
2. Enable **Developer Mode**
3. Click on **Load unpacked** and select the `/build` directory

Your password generator extension should now be active and ready to use in Chrome!

---

## Project Structure

Here’s a quick overview of the project structure:

```
 .
├──  build
│   ├──  assets
│   │   ├──  favicon.png
│   │   ├──  main.css
│   │   └──  main.js
│   ├──  favicon.png
│   ├──  index.html
│   └──  manifest.json
├──  bun.lockb
├──  cli.ts
├──  index.html
├──  package.json
├──  postcss.config.js
├──  public
│   └──  favicon.png
├──  README.md
├──  src
│   ├──  app.css
│   ├──  App.svelte
│   ├──  assets
│   │   └── 󰕙 svelte.svg
│   ├──  lib
│   │   └──  index.ts
│   ├──  main.ts
│   └──  vite-env.d.ts
├──  svelte.config.js
├──  tailwind.config.js
├──  tsconfig.json
├──  tsconfig.node.json
└──  vite.config.ts
```

## Development

During development, you can run the following command to start a local server and begin working on the extension:

```bash
npm run dev
```

This will launch a local development server and you can preview the extension in the browser by going to the provided URL (usually `http://localhost:3000`).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to tweak this README further to match the specifics of your project. Would you like to add more sections, like Features or Contributions?
