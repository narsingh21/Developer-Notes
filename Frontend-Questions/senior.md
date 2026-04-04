# Senior Frontend Developer Interview Questions

> Advanced frontend topics including critical rendering path, core web vitals, caching strategies, lazy loading, and performance optimization.

---

## 📚 Contents

1. [CRP](#crp-critical-rendering-path) - Critical Rendering Path
2. [Core Web Vitals](#core-web-vitals) - LCP, INP, CLS
3. [HTTP Caching](#http-caching) - Browser caching
4. [Content Negotiation](#content-negotiation) - API versioning
5. [Lazy Loading](#lazy-loading) - Code splitting
6. [Bundle Splitting](#bundle-splitting) - Performance
7. [Critical CSS](#critical-css) - Above-the-fold

---

## CRP (Critical Rendering Path)

The critical rendering path describes how the browser parses HTML, CSS, and JS to render pixels. Optimizing it involves reducing render-blocking CSS and JS, minimizing layout work, and prioritizing above-the-fold content.

---

## Core Web Vitals

Core Web Vitals measure loading (LCP), interactivity (INP), and visual stability (CLS). I optimize them by reducing render-blocking resources, minimizing JS work, and ensuring layout stability with reserved space.

- **INP** - Interaction to Next Paint
- **CLS** - Cumulative Layout Shift
- **LCP** - Largest Contentful Paint

---

## HTTP Caching

HTTP caching allows browsers and intermediaries (CDNs, proxies) to store responses and reuse them to reduce latency, bandwidth, and server load.

**Headers:**

```
Cache-Control: max-age=3600
ETag: "v1.0.5"
```

**What is ETag?**
An ETag is a unique identifier sent by the server to represent a specific version of a resource. It enables cache revalidation so clients can check whether their cached copy is still valid.

**HTTP 304:**
"The resource hasn't changed since the last time you fetched it. Use your cached copy. No response body is sent."

**Cache Revalidation Flow:**

1. Client sends request to server
2. Server sends response with cached ETag and 200
3. Now cache is stale so browser requests with ETag
4. Server verifies the resource with ETag
5. If resource not changed → server responds with 304
6. If changed → 200 with new ETag

---

## Content Negotiation

Content negotiation allows clients and servers to agree on the best representation of a resource using headers like Accept, Accept-Language, and Accept-Encoding. It enables flexible APIs without duplicating endpoints.

**Headers:**

```
Accept: application/json, text/html;q=0.8
Accept-Language: en-IN, en;q=0.9, hi;q=0.8
Accept-Encoding: br, gzip
```

**HTTP 406:**
Not Acceptable (not accepted format found)

---

## Lazy Loading

Lazy loading is a performance optimization technique where resources are loaded only when they're actually needed, instead of loading everything upfront.

### Method 1: Image Lazy Loading

```html
<img src="photo.jpg" loading="lazy" alt="image" />
```

### Method 2: React Lazy Loading

```javascript
import { Suspense, lazy } from 'react';

const Dashboard = lazy(() => import('./Dashboard'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Dashboard />
    </Suspense>
  );
}
```

### Method 3: Route-based Lazy Loading

```javascript
const Profile = lazy(() => import('./Profile'));

<Route
  path='/profile'
  element={
    <Suspense fallback={<Spinner />}>
      <Profile />
    </Suspense>
  }
/>;
```

---

## Bundle Splitting

Bundle splitting breaks large JS into smaller chunks using dynamic imports. The main bundle loads first, and route or feature chunks load on demand. Bundlers extract shared and vendor code to optimize caching and performance.

### How Splitting Works (Build → Runtime)

**Build time:**

- Bundler scans for `import()`
- Creates separate chunk files
- Extracts shared deps to common/vendor

**Runtime:**

- Browser loads main.js
- On route visit → fetches that route's chunk
- Shared chunks loaded once, reused

### Automatic vs Manual Splitting

**Automatic (Recommended):**

- Bundler detects shared deps
- Creates optimal common/vendor chunks

**Manual (Advanced):**

- Explicit chunking rules (e.g., Webpack splitChunks)
- Use sparingly; easy to over-optimize

---

## Critical CSS

Critical CSS is the minimal CSS needed for above-the-fold content, inlined to avoid render-blocking and speed up first paint.

It is inlined in the HTML to speed up the first render.
