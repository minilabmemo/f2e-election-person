# f2e-election-person

## 作品說明
The F2E 六角學院 修煉精神光屋 Mission 1 - 立委競選官網，示範網頁
- 設計稿特別感謝 [設計師 jhen](https://2023.thef2e.com/users/12061579704041679194) 提供。
- 網頁網址 [https://minilabmemo.github.io/f2e-election-person/](https://minilabmemo.github.io/f2e-election-person/)
- 作品畫面
  - 網頁版 
<img src="./demo_web.png" >
  - 手機版（375px)
<img src="./demo_phone.png" >
----

### 功能說明


## 系統說明
本專案使用 `create-react-app` typescript 範本，部署到 Github Pages， 
- Node.js `v20.9.0`
- 環境變數請參考 [env_template](./env_template)
- 指令
  - `npm install` 下載依賴包
  - `npm start` 運行
  - `npm test` 運行測試

### 運行測試
```
npm test
npm test -- --coverage 
coverage/lcov-report/src/components/index.html
```



#### 資料夾說明
```$ tree -d
src .
├── assets 資源
│   ├── files
│   ├── gif
│   └── images
├── components 組件
│   └── icons
├── layouts 頁面
├── styles  樣式
│   ├── animations
│   ├── fonts
│   └── partials
│       ├── global
│       ├── layouts
│       └── min_classs
└── utils 工具
```

## 使用技術
- React
- Typescript
- SCSS
## 第三方服務


