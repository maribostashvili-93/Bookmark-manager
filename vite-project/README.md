# Bookmark Manager

Bookmark Manager არის React აპლიკაცია ვებგვერდების ბმულების შესანახად, მოსაძებნად, გასაფილტრად და სამართავად. პროექტის მთავარი მიზანია React-ის ძირითადი კონცეფციების რეალურ, სრულად ინტერაქტიულ აპლიკაციაში გამოყენება.

დიზაინი ეფუძნება [Figma-ს Bookmark Manager მაკეტს](https://www.figma.com/design/giO3ChUIk9nSfgzW6aEVh5/bookmark-manager-app?node-id=234-4992&m=dev&t=eztu8u7hiTorkICO-1). ვიზუალური სიზუსტე მნიშვნელოვანია, თუმცა ფუნქციონალსა და React-ის სწორ არქიტექტურას უფრო მაღალი პრიორიტეტი აქვს.

## ძირითადი შესაძლებლობები

დასრულებულ აპლიკაციაში მომხმარებელს შეეძლება:

- Bookmark-ის დამატება, რედაქტირება და წაშლა;
- Bookmark-ის Pin/Unpin;
- Bookmark-ის დაარქივება და არქივიდან აღდგენა;
- სათაურისა და აღწერის მიხედვით ძებნა;
- Tag-ის მიხედვით გაფილტვრა;
- Bookmark-ების დალაგება მინიმუმ ორი წესით;
- Light და Dark Theme-ს შორის გადართვა;
- მონაცემებისა და Theme-ის შენარჩუნება გვერდის განახლების შემდეგ.

## მიმდინარე სტატუსი

ამ ეტაპზე შექმნილია responsive UI და ძირითადი reusable კომპონენტები:

- მთავარი, Archived, Tagged და Search გვერდები;
- Sign In, Sign Up და Forgot Password გვერდები;
- Bookmark card, Header, Sidebar და საერთო App layout;
- Add/Edit და confirmation modal-ების ვიზუალური ვერსიები;
- bookmark actions, sort და profile dropdown-ები;
- Toast და Light/Dark Theme-ის ვიზუალური კონტროლი;
- desktop, tablet და mobile layout-ები.

ფუნქციური React ლოგიკა ჯერ დასასრულებელია. ამჟამად `App.jsx` მხოლოდ Home გვერდს აჩვენებს, Bookmark-ები პირდაპირ JavaScript ფაილიდან იტვირთება, ხოლო ფორმებს, მენიუებსა და ღილაკებს event handler-ები არ აქვთ. `public/data/bookmarks.json` ჯერ ცარიელია.

სამუშაოს ზუსტი რიგი და თითოეული ეტაპის შემოწმების კრიტერიუმები აღწერილია [PROJECT_INSTRUCTIONS.md](./PROJECT_INSTRUCTIONS.md)-ში.

## ტექნოლოგიები

- React 19
- JavaScript (ES Modules)
- Vite
- CSS
- ESLint
- Fetch API
- Web Storage API (`localStorage`)

გარე state-management ან form library არ გამოიყენება. პროექტის მიზანია React-ის ჩაშენებული შესაძლებლობების პრაქტიკული გამოყენება.

## ლოკალურად გაშვება

საჭიროა Node.js და npm.

```bash
npm install
npm run dev
```

თუ Windows PowerShell `npm.ps1`-ის გაშვებას ბლოკავს:

```powershell
npm.cmd install
npm.cmd run dev
```

Vite ტერმინალში აჩვენებს აპლიკაციის მისამართს. ჩვეულებრივ ეს არის `http://localhost:5173`; თუ პორტი დაკავებულია, ავტომატურად გამოიყენება შემდეგი თავისუფალი პორტი.

## შემოწმება და production build

```bash
npm run lint
npm run build
```

PowerShell-ში საჭიროების შემთხვევაში გამოიყენეთ `npm.cmd`.

## პროექტის სტრუქტურა

```text
vite-project/
├── public/
│   └── data/
│       └── bookmarks.json     # საწყისი seed data
├── src/
│   ├── assets/                # icons, favicons და images
│   ├── components/            # reusable UI კომპონენტები
│   ├── data/                  # მიმდინარე დროებითი mock data
│   ├── pages/                 # გვერდების კომპონენტები
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── PROJECT_INSTRUCTIONS.md
├── package.json
└── README.md
```

## მონაცემების ჩატვირთვის წესი

`public/data/bookmarks.json` არის მხოლოდ seed data. აპლიკაციის დაწყებისას:

1. მოწმდება `localStorage`;
2. თუ შენახული Bookmark-ები არსებობს, გამოიყენება ისინი;
3. თუ მონაცემები არ არსებობს, სრულდება `fetch('/data/bookmarks.json')`;
4. მიღებული მონაცემები ინახება React state-ში;
5. შემდგომი ცვლილებები სინქრონდება `localStorage`-თან.

JSON ფაილი JavaScript module-ად პირდაპირ არ უნდა დაიმპორტოს.

## React-ის სავალდებულო მიდგომები

პროექტში გამოიყენება Functional Components, JSX, props, callback props, `props.children`, `useState`, `useEffect`, controlled inputs, conditional rendering, `.map()` და stable keys.

State და props პირდაპირ არ იცვლება. Array/object update-ები სრულდება immutable გზით, მაგალითად `map`, `filter` და spread syntax-ის გამოყენებით. გაფილტრული ან დალაგებული Bookmark-ები ცალკე state-ში არ ინახება — ისინი გამოითვლება არსებული state-ებიდან.

## Bookmark-ის მაგალითი

```json
{
  "id": 1,
  "title": "React Documentation",
  "url": "https://react.dev",
  "description": "Official React documentation",
  "tags": ["React", "Frontend"],
  "isPinned": true,
  "isArchived": false,
  "createdAt": "2026-09-22T12:00:00.000Z"
}
```

## ჩაბარების ფორმატი

პროექტის საბოლოო ვერსია უნდა შეიცავდეს:

1. დასრულებულ React აპლიკაციას;
2. GitHub repository-ს;
3. მოქმედ deployed ვერსიას;
4. README-ს პროექტის აღწერით, ფუნქციებით, ტექნოლოგიებითა და გაშვების ინსტრუქციით.

## წყარო დოკუმენტები

ეს README მომზადებულია დავალების ორ თანდართულ დოკუმენტზე დაყრდნობით:

- `React Bookmark Manager Project .pdf` — სავალდებულო მოთხოვნები და acceptance criteria;
- `Bookmark Manager Guide.docx` — სამუშაოს რეკომენდებული ეტაპობრივი თანმიმდევრობა.
