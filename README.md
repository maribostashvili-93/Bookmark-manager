# Bookmark Manager

A clean and responsive React application for saving, organizing, searching, and managing useful web links.

The interface is based on the [Bookmark Manager Figma design](https://www.figma.com/design/giO3ChUIk9nSfgzW6aEVh5/bookmark-manager-app?node-id=234-4992&m=dev&t=eztu8u7hiTorkICO-1) and supports desktop, tablet, and mobile layouts.

## Features

- Add, edit, and delete bookmarks
- Pin and unpin important bookmarks
- Archive and restore bookmarks
- Search bookmarks by title or description
- Filter bookmarks by tag
- Sort saved bookmarks
- Switch between light and dark themes
- Responsive layouts for desktop, tablet, and mobile
- Reusable React components
- Persistent bookmark and theme data with `localStorage`

## Built With

- React 19
- JavaScript (ES Modules)
- Vite
- CSS
- ESLint
- Fetch API
- Web Storage API

## Getting Started

### Prerequisites

Install [Node.js](https://nodejs.org/) and npm before running the project.

### Installation

```bash
git clone https://github.com/maribostashvili-93/Bookmark-manager.git
cd Bookmark-manager
npm install
```

### Run the development server

```bash
npm run dev
```

Open the local address shown by Vite, usually `http://localhost:5173`.

## Available Scripts

```bash
npm run dev      # Start the development server
npm run build    # Create a production build
npm run lint     # Run ESLint
npm run preview  # Preview the production build
```

## Project Structure

```text
Bookmark-manager/
|-- public/              # Static files and bookmark seed data
|-- src/
|   |-- assets/          # Icons, favicons, and images
|   |-- components/      # Reusable UI components
|   |-- data/            # Bookmark data
|   |-- pages/           # Application pages
|   |-- App.jsx
|   |-- index.css
|   `-- main.jsx
|-- package.json
`-- README.md
```

## Bookmark Data

The application checks `localStorage` first. If no saved bookmarks are available, it loads the initial data from `public/data/bookmarks.json`. Later changes are saved back to `localStorage`.

## Application Architecture

```text
Bookmark Manager
|
|-- Layout
|   |-- Header
|   |-- Sidebar / Navigation
|   `-- Main Content
|
|-- Bookmark Management
|   |-- Bookmark List
|   |-- Bookmark Card
|   |-- Add Bookmark
|   |-- Edit Bookmark
|   |-- Delete Bookmark
|   |-- Pin / Unpin
|   `-- Archive / Restore
|
|-- Search & Organization
|   |-- Search
|   |-- Tag Filter
|   `-- Sorting
|
|-- UI States
|   |-- Loading
|   |-- Error
|   |-- Empty State
|   `-- Modal
|
`-- Data Persistence
    |-- bookmarks.json
    |-- fetch()
    |-- localStorage
    `-- Theme
```

## Design

The UI includes bookmark cards, navigation, forms, dropdown menus, modals, toast messages, authentication screens, and light/dark appearance controls.
