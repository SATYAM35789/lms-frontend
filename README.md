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
3.Add file extensions to taiwind config file in the contents property
```
 "./index.html","./src/**/*.{html,js,jsx,ts,tsx}"
```
4. Import the tailwind at top of the index.css file
```
@import "tailwindcss";
```

### Adding plugins and dependencies
```
npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp
```

### Configure auto import sort eslint :- 

1. Installation Simple import sort:- 
```
npm i eslint-plugin-simple-import-sort
```

so if we want ki dev dependencies mai chala jaaye then  :- 
```
npm i -D eslint-plugin-simple-import-sort  postcss autoprefixer  
```

2. Add Rules in '.eslint.config.js' 
Show error when the imports are not sorted 
```
'simple-import-sort/imports': 'error',
```

Add : plugins :- 
```
'simple-import-sort': simpleImportSort,
```

4. To enable auto imports sort on file save in vscode
    - open 'setting.json'
    - add the following config
```
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true ,
  }
``` 