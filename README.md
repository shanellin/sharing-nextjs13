This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:6060](http://localhost:6060) with your browser to see the result.

## Feature

### ㄧ、 Router system

1. App/page
2. Route group -> (main)、(store)
3. Layout -> (main)/layout、(store)/layout
4. Loading -> (main)/loading
5. Error -> (main)/error
4. Dyamic route -> (main)/ISR/[postId]

### 二、 Rendering

1. SSR -> cache: "no-store", implement streaming ssr
2. SSG -> cache: "force-cache" or empty
3. ISR -> next: { revalidate: 10 } (main)/ISR/[postId], check ISR/4 in devtool's network tab.
4. CSR -> skip duplicate api call (Cache-Status: MISS | HIT)

### 三、 Component

1. Client component -> components/client
2. Server component -> components/server

### 四、 styles

1. Css
2. Styled-component (> v6.0.0) -> styles/registry、(store)/layout

### 五、 utils

1. Metadata -> (main)/layout、(store)/layout
2. Next/font -> (main)/layout、(store)/layout
3. Next/image -> (main)/page
4. Next/link -> (main)/page

### 六、 others

1. middleware
2. BE api
