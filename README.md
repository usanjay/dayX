# 📅 DayX — Task & Calendar Manager

A clean, responsive task management app with an integrated calendar view. Create tasks with start and end dates, then visualize them on a monthly calendar with color-coded day indicators.

## ✨ Features

- **Create & Delete Tasks** — Add tasks with a name, start date, and deadline
- **Persistent Storage** — Tasks are saved to `localStorage` and survive page reloads
- **Monthly Calendar View** — Visualize task timelines with color-coded days:
  - 🟢 **Today** — Current date
  - 🔵 **Start** — Task start date
  - 🟣 **End** — Task deadline
  - 🔴 **Past** — Overdue task days
  - 🟡 **Future** — Upcoming task days
- **Responsive Design** — Fully optimized for desktop and mobile
- **Form Validation** — Task name length limits, end date must be after start date

## 🛠 Tech Stack

| Category | Technology |
|----------|------------|
| Framework | React 19 |
| Build Tool | Vite 7 |
| Styling | Tailwind CSS 4 |
| Routing | React Router 7 |
| Forms | React Hook Form |
| Icons | Font Awesome |
| Responsive | react-responsive |
| Testing | Vitest + React Testing Library |

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Install & Run

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Run tests
npm test

# Build for production
npm run build
```

## 🧪 Testing

The project has **70 test cases** across **10 test files** covering:

| Layer | Tests | What's Covered |
|-------|:-----:|----------------|
| Utility Functions | 29 | `dateFormat`, `isSameDay`, `isWithinTaskTime`, `weekCount`, etc. |
| App Integration | 5 | localStorage CRUD, task creation & deletion |
| Components | 36 | Header, NewTask form, Home page, TaskList, TaskDetails, Indicators |

```bash
npm test              # run all tests once
npx vitest            # watch mode
npx vitest --coverage # with coverage report
```

## 📁 Project Structure

```
src/
├── __tests__/                  # App-level integration tests
├── components/
│   └── Header/
│       ├── Header.jsx          # Top navigation bar
│       ├── NewTask.jsx         # Create task modal form
│       └── __tests__/
├── pages/
│   ├── HomePage/
│   │   ├── Home.jsx            # Main task list page
│   │   ├── TaskList.jsx        # Desktop task table
│   │   ├── TaskListMobile.jsx  # Mobile task cards
│   │   └── __tests__/
│   └── CalanderPage/
│       ├── Calander.jsx        # Calendar route wrapper
│       ├── CalanderMonthly.jsx # Monthly calendar grid
│       ├── Day.jsx             # Individual day cell
│       ├── Month.jsx           # Month grid with weekday headers
│       ├── TaskDetails.jsx     # Task info panel
│       ├── indicators/         # Color legend components
│       └── month-details-header/ # Month navigation controls
├── utils/
│   ├── dateFormat.js           # Date → "Mon D, YYYY" formatter
│   └── dateUtils.js            # Date comparison helpers
└── data/
    └── tasks.js
```

## 📜 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |
| `npm test` | Run Vitest test suite |

## 📄 License

This project is private and not licensed for public distribution.
