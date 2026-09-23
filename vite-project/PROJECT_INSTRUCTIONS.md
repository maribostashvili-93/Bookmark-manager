# Bookmark Manager — სამუშაო ინსტრუქცია

ეს ფაილი აერთიანებს დავალების PDF-ში მოცემულ სავალდებულო მოთხოვნებსა და Word-ის გზამკვლევის რეკომენდებულ სამუშაო რიგს. იგი მორგებულია პროექტის მიმდინარე მდგომარეობაზე: ვიზუალური კომპონენტები უკვე შექმნილია, მაგრამ ინტერაქტიული React ლოგიკა ჯერ დასამატებელია.

## მოთხოვნების მნიშვნელობა

- **სავალდებულო** — მოთხოვნა პირდაპირ წერია პროექტის PDF-ში და ჩაბარებისთვის უნდა შესრულდეს.
- **რეკომენდებული განხორციელება** — Word-ის გზამკვლევის ან პროექტის არსებული სტრუქტურის მიხედვით შეთავაზებული სამუშაო გზა. მისი ზუსტად გამეორება აუცილებელი არ არის, თუ საბოლოო შედეგი ყველა სავალდებულო მოთხოვნას აკმაყოფილებს.
- **Bonus** — არასავალდებულო დამატებითი შესაძლებლობა.

## უკვე გაკეთებულია

- [x] Vite + React პროექტი ეშვება;
- [x] UI დაყოფილია მრავალ reusable კომპონენტად;
- [x] Header, Sidebar, BookmarkCard და AppLayout გამოყოფილია;
- [x] Bookmark-ები `.map()`-ით render-დება და `id` stable key-დ გამოიყენება;
- [x] reusable Modal იყენებს `props.children`-ს;
- [x] Add/Edit, Confirm, dropdown, Toast და auth ეკრანების ვიზუალური ვერსიები არსებობს;
- [x] desktop, tablet და mobile CSS არსებობს;
- [x] `npm run lint` და `npm run build` წარმატებით სრულდება.

## ჯერ გასაკეთებელია

- [ ] Bookmark-ების React state-ში გადატანა;
- [ ] seed JSON-ის შევსება და `fetch()`-ით ჩატვირთვა;
- [ ] loading, error და empty states;
- [ ] ყველა ღილაკისა და მენიუს event handler-ები;
- [ ] Add/Edit/Delete;
- [ ] Pin/Unpin და Archive/Restore;
- [ ] Search, Tag Filter და Sort;
- [ ] controlled form და validation;
- [ ] `localStorage` persistence;
- [ ] Light/Dark Theme-ის რეალური გადართვა;
- [ ] საბოლოო refactor და სრული user-flow testing.

## 1. მოამზადე seed data

**სავალდებულო:** საწყისი მონაცემები უნდა იყოს `public/data/bookmarks.json`-ში. JSON პირდაპირ JavaScript module-ად არ დააიმპორტო.

ამჟამად ეს ფაილი ცარიელია, ხოლო მონაცემები `src/data/bookmarks.js`-შია. გადაიტანე Bookmark object-ები valid JSON ფორმატში და გააერთიანე property სახელები:

```json
{
  "id": 1,
  "title": "React Documentation",
  "url": "https://react.dev",
  "description": "Official React documentation",
  "tags": ["React", "Frontend"],
  "isPinned": false,
  "isArchived": false,
  "createdAt": "2026-09-22T12:00:00.000Z"
}
```

შესამოწმებელი:

- [ ] JSON valid არის;
- [ ] ყველა Bookmark-ს უნიკალური `id` აქვს;
- [ ] ყველა object-ს ერთნაირი აუცილებელი properties აქვს;
- [ ] `src/data/bookmarks.js` აღარ არის აპლიკაციის მონაცემთა წყარო.

## 2. შექმენი მონაცემების ჩატვირთვის flow

**სავალდებულო:** პირველი render-ის შემდეგ მონაცემები ჩაიტვირთოს `useEffect`-ში. ჯერ შეამოწმე `localStorage`; თუ მონაცემები არ არსებობს, გამოიყენე `fetch('/data/bookmarks.json')`.

საჭირო state-ის მინიმალური მაგალითი:

```js
const [bookmarks, setBookmarks] = useState([])
const [isLoading, setIsLoading] = useState(true)
const [error, setError] = useState(null)
```

მოსალოდნელი flow:

```text
App starts
  ↓
Check localStorage
  ├─ data exists → parse saved bookmarks
  └─ no data     → fetch /data/bookmarks.json
  ↓
setBookmarks
  ↓
hide loading state
```

შესამოწმებელი:

- [ ] Fetch component body-ში არ სრულდება;
- [ ] Fetch mount-ის შემდეგ ერთხელ სრულდება;
- [ ] Loading-ისას შესაბამისი UI ჩანს;
- [ ] fetch/JSON error-ისას გასაგები error UI ჩანს;
- [ ] წარმატებისას Bookmark list ჩანს;
- [ ] effect infinite loop-ს არ ქმნის.

## 3. განსაზღვრე მთავარი state და component responsibilities

**სავალდებულო:** state უნდა იყოს იმ კომპონენტში, რომელსაც შესაბამისი მონაცემების მართვა ეკუთვნის. `App.jsx` არ უნდა გადაიქცეს ერთ დიდ კომპონენტად მთელი markup-ით.

რეკომენდებული state:

```text
bookmarks, isLoading, error
activeView
searchTerm, selectedTag, sortBy
modalState, editingBookmark
theme
toast
openMenuId
```

`filteredBookmarks`, `searchedBookmarks` და `sortedBookmarks` ცალკე state-ში არ შეინახო. ისინი render-ისას გამოითვალე არსებული state-ებიდან.

მონაცემების რეკომენდებული transformation pipeline:

```text
bookmarks
  ↓ active / archived
search
  ↓
tag filter
  ↓
sort
  ↓
pinned first
  ↓
render
```

## 4. დააკავშირე navigation და UI controls

ამჟამად გვერდები და open-state მაგალითები არსებობს, მაგრამ static props-ით იმართება.

დაამატე:

- [ ] Home და Archived view-ს გადართვა;
- [ ] mobile Sidebar-ის გახსნა და დახურვა;
- [ ] profile menu;
- [ ] sort menu;
- [ ] მხოლოდ ერთი Bookmark actions menu-ის გახსნა;
- [ ] Add/Edit/Confirm modal-ის გახსნა და დახურვა;
- [ ] modal overlay/Close/Cancel ქცევა;
- [ ] მოქმედების შემდეგ Toast შეტყობინება.

Child კომპონენტებმა parent state callback props-ით უნდა შეცვალონ, მაგალითად:

```jsx
<BookmarkCard
  bookmark={bookmark}
  onEdit={handleEditBookmark}
  onDelete={handleDeleteBookmark}
  onTogglePin={handleTogglePin}
/>
```

## 5. შექმენი ერთი reusable Add/Edit form

**სავალდებულო:** ძირითადი ფორმა უნდა იყოს controlled. ყველა input უნდა იღებდეს `value`-ს state-იდან და ცვლილებას ამუშავებდეს `onChange`-ით. Submit უნდა შესრულდეს form-ის `onSubmit`-ით და გამოიყენოს `preventDefault()`.

ფორმის ველები:

- Title — სავალდებულო;
- URL — სავალდებულო და valid URL;
- Description — optional;
- Tags — მინიმუმ ერთი Tag სავალდებულოა.

Add-ისას შექმენი სრული object უნიკალური `id`-ით. Edit-ისას არჩეული Bookmark-ის მონაცემები წინასწარ ჩატვირთე ფორმაში და განაახლე იგივე object; duplicate არ შექმნა.

შესამოწმებელი:

- [ ] Add და Edit ერთ reusable form-ს იყენებს;
- [ ] Invalid form არ submit-დება;
- [ ] შეცდომა შესაბამის field-თან ჩანს;
- [ ] სწორ submit-ზე UI reload-ის გარეშე ახლდება;
- [ ] ფორმა წარმატების შემდეგ იწმინდება და modal იხურება;
- [ ] object/array state პირდაპირ არ იცვლება.

## 6. დაამატე Bookmark actions

ყველა update გააკეთე `id`-ის მიხედვით და immutable მეთოდებით.

### Pin / Unpin

- [ ] შესაბამისი Bookmark-ის `isPinned` იცვლება;
- [ ] pinned მდგომარეობა ვიზუალურად ჩანს;
- [ ] pinned Bookmark-ები აქტიური სიის თავშია;
- [ ] სხვა Bookmark-ები უცვლელი რჩება.

### Archive / Restore

- [ ] Archive ცვლის `isArchived`-ს;
- [ ] archived Bookmark Home view-ში აღარ ჩანს;
- [ ] Archived view-ში მხოლოდ archived Bookmark-ებია;
- [ ] Restore აბრუნებს Bookmark-ს აქტიურ სიაში.

### Delete

- [ ] Delete კონკრეტულ Bookmark-ს `filter()`-ით ან ეკვივალენტური immutable გზით შლის;
- [ ] წაშლა `id`-ით ხდება და არა array index-ით;
- [ ] წაშლამდე არსებული custom ConfirmModal გამოიყენება;
- [ ] გვერდის reload არ ხდება.

## 7. დაამატე Search

**სავალდებულო:** Search input controlled უნდა იყოს და შედეგი აკრეფისას განახლდეს.

- [ ] ძებნა მუშაობს Title-ზე;
- [ ] ძებნა მუშაობს Description-ზე;
- [ ] სასურველია ძებნა case-insensitive იყოს;
- [ ] შედეგის არარსებობისას შესაბამისი Empty State ჩანს;
- [ ] Search Filter-სა და Sort-თან ერთად მუშაობს.

## 8. დაამატე Tag filtering

**სავალდებულო:** მინიმუმ ერთი Tag-ის არჩევა და `All` option.

- [ ] არჩეული Tag state-ში ინახება;
- [ ] მხოლოდ შესაბამისი Bookmark-ები ჩანს;
- [ ] `All` ყველა შესაბამის view-ს Bookmark-ს აჩვენებს;
- [ ] Tag count-ები სასურველია Bookmark data-დან გამოითვალოს და hardcoded არ დარჩეს;
- [ ] Filter Search-თან ერთად მუშაობს.

რამდენიმე Tag-ის ერთდროული არჩევა Bonus მოთხოვნაა. არსებული checkbox UI ამისთვის შეიძლება გამოიყენო, თუმცა სავალდებულო ნაწილისთვის ერთი არჩეული Tag საკმარისია.

## 9. დაამატე Sorting

**სავალდებულო:** უნდა არსებობდეს მინიმუმ ორი sort option. არსებული დიზაინი შეიცავს `Recently added`, `Recently visited` და `Most visited` ვარიანტებს.

- [ ] sort option state-ში ინახება;
- [ ] არჩევისას სია ავტომატურად ახლდება;
- [ ] საწყისი array ადგილზე არ დალაგდეს — გამოიყენე მისი copy;
- [ ] pinned Bookmark-ები არჩეული sorting-ის მიუხედავად თავში რჩება;
- [ ] Search და Tag Filter კვლავ სწორად მუშაობს.

## 10. დაამატე Empty States

**სავალდებულო:** მომხმარებელი გაურკვეველ ცარიელ ეკრანზე არ უნდა დარჩეს.

შექმენი reusable EmptyState და აჩვენე მინიმუმ ამ შემთხვევებში:

- [ ] საერთოდ არ არის Bookmark;
- [ ] Search-ს შედეგი არ აქვს;
- [ ] არჩეულ Tag-ს შედეგი არ აქვს;
- [ ] Archived view ცარიელია.

## 11. დაამატე localStorage persistence

**სავალდებულო:** Bookmark-ებისა და Theme-ის მდგომარეობა refresh-ის შემდეგ უნდა აღდგეს.

- [ ] Bookmark state-ის ცვლილება `useEffect`-ით ინახება;
- [ ] app start-ზე შენახული data უსაფრთხოდ parse-დება;
- [ ] პირველ loading effect-ს ცარიელი array შემთხვევით არ გადააწერინოს შენახულ მონაცემებს;
- [ ] Add/Edit/Delete/Pin/Archive ცვლილებები refresh-ის შემდეგ რჩება;
- [ ] malformed saved data-ის შემთხვევა error/fallback-ით იმართება.

## 12. აამუშავე Light/Dark Theme

**სავალდებულო:** Theme state-ით უნდა იმართებოდეს და `localStorage`-ში ინახებოდეს.

- [ ] Light ღილაკი light theme-ს რთავს;
- [ ] Dark ღილაკი dark theme-ს რთავს;
- [ ] არჩეული Theme root ელემენტის `data-theme` attribute-ზე აისახება;
- [ ] refresh-ის შემდეგ Theme აღდგება;
- [ ] კონტროლის active state და accessibility attributes სწორია.

## 13. Refactoring და კოდის ხარისხი

ახალი feature-ების დასრულების შემდეგ:

- [ ] App.jsx არ შეიცავს მთელ markup-სა და ყველა handler-ს;
- [ ] component boundaries ლოგიკურია;
- [ ] callback props-ს გასაგები სახელები აქვს;
- [ ] Add/Edit logic არ მეორდება;
- [ ] props პირდაპირ არ იცვლება;
- [ ] state პირდაპირ არ იცვლება;
- [ ] `key={index}` არ გამოიყენება, როცა `id` არსებობს;
- [ ] UI-ის სამართავად არ გამოიყენება `querySelector`, `innerHTML`, `classList` ან `style.display`;
- [ ] მონაცემების განახლებისთვის არ გამოიყენება `window.location.reload()`;
- [ ] Redux, Zustand, MobX, React Hook Form, Formik, Yup ან Zod არ გამოიყენება;
- [ ] event handler-ებს აღწერითი სახელები აქვს.

## 14. Responsive და accessibility შემოწმება

- [ ] desktop layout usable არის;
- [ ] tablet layout usable არის;
- [ ] mobile navigation იხსნება და იხურება;
- [ ] content არ იჭრება;
- [ ] buttons და forms keyboard-ით ხელმისაწვდომია;
- [ ] modal-ს შესაბამისი dialog semantics აქვს;
- [ ] focus-visible მდგომარეობები ჩანს;
- [ ] icon-only ღილაკებს `aria-label` აქვს.

## 15. საბოლოო ტესტირების flow

ხელით გაიარე სრული სცენარი ამ თანმიმდევრობით:

```text
Open App
  ↓
Initial Data Loads
  ↓
Add → Edit → Pin → Archive → Restore
  ↓
Search → Tag Filter → Sort
  ↓
Delete
  ↓
Change Theme
  ↓
Refresh Page
  ↓
Verify Bookmarks and Theme Persistence
```

შემდეგ გაუშვი:

```bash
npm run lint
npm run build
```

საბოლოო checklist:

- [ ] Add/Edit/Delete მუშაობს;
- [ ] Pin/Unpin მუშაობს და pinned items პირველებია;
- [ ] Archive/Restore მუშაობს;
- [ ] Search Title-სა და Description-ზე მუშაობს;
- [ ] Tag Filter და All option მუშაობს;
- [ ] მინიმუმ ორი Sort option მუშაობს;
- [ ] Validation invalid submit-ს აჩერებს;
- [ ] Loading, Error და ყველა Empty State ჩანს შესაბამის პირობებში;
- [ ] Bookmark-ები და Theme refresh-ის შემდეგ აღდგება;
- [ ] Console-ში მნიშვნელოვანი React error ან warning არ არის;
- [ ] lint და production build წარმატებით სრულდება.

## Bonus სამუშაოები

ეს პუნქტები PDF-ის მიხედვით არასავალდებულოა:

- Favorite Bookmark და Favorites view;
- Multiple Tag Filtering;
- Custom Confirm Modal — ამ პროექტში ვიზუალური კომპონენტი უკვე არსებობს და მისი ამუშავება შეგიძლია;
- Live Clock ან Last Visit update; `setInterval`-ის შემთხვევაში cleanup აუცილებელია;
- `document.title`-ის დინამიკური შეცვლა;
- responsive Sidebar — ვიზუალური ვერსია უკვე არსებობს და მხოლოდ state/handlers სჭირდება.

## რეკომენდებული commit-ების რიგი

ეს ნაწილი ჩემი სამუშაო რეკომენდაციაა და წყარო დოკუმენტების სავალდებულო მოთხოვნა არ არის:

1. `data: add seed bookmarks json and loading states`
2. `state: add bookmark state and persistence`
3. `features: implement bookmark crud actions`
4. `features: add search filtering and sorting`
5. `theme: persist light and dark mode`
6. `ui: add empty error and feedback states`
7. `refactor: simplify bookmark data flow`
8. `test: verify responsive user flows`
