# Story Web — Foundation

The initial project scaffold for Story Web, built with React, TypeScript, Vite, XYFlow, Zustand, Tailwind CSS, and Lucide icons.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Verify the project

```bash
npm run typecheck
npm run build
```

## Included in this foundation

- Vite + React + strict TypeScript setup
- XYFlow canvas shell with pan/zoom controls
- Zustand application store
- Light/dark theme toggle, persisted in local storage
- Responsive header, workspace, and status bar
- Minimal visual design tokens and styling

## Intentionally not implemented yet

Story nodes, edges, editing, branching, title metadata, selection/path highlighting, Hero's Journey, Writer's Block, import/export, autosave, and undo/redo belong to later implementation plans.

The header's import/export and new-story controls are disabled placeholders, not unfinished working features.
