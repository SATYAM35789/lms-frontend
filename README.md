# LMS Frontend 

### Setup Instruction
1. Clone the project

```
  git clone   https://github.com/SATYAM35789/lms-frontend.git
```
2. Move in the Directory
```
   cd lms-fontend
```
3. install dependency
```
npm install 
```

4. run the server
```
   npm run dev
```

### Setup instructions for tailwind
[Tailwind official instruction doc](https://tailwindcss.com/docs/installation/using-vite)

1. Install tailwind css
```
npm install tailwindcss @tailwindcss/vite
```

2. Create config.css file
```
npx tailwindcss init
```
3.Add fele extensions to taiwind config file in the contents property
```
"./src/**/*.{html,js,jsx,ts,tsx}"
```
4. Import the tailwind at top of the index.css file
```
@import "tailwindcss";
```