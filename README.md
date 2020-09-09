# Better.dom.d.ts

A (maybe) better `d.ts` for `DOM` (or more),
built upon TypeScript's automatically generated `lib.dom.d.ts`

## What improvements it provides ?
* Separated interface and type declarations in `types.dom.d.ts`
* Separated declarations for workers in `types.worker.d.ts`
* Explicit `namespace window` for `DOM` in `window.dom.d.ts`
* Explicit `namespace self` for `WebWorker` in `web.worker.d.ts`
* Explicit `namespace self` for `serviceWorker` in `service.worker.d.ts`, which is not provided by original `d.ts` files.
* Type safe `window.setTimeout` and `window.setInterval` signature
* Maybe<Improvement>: Optional semicolons removed to shrink size
    * Can be put back easily by some formatting tools

## How do you (can I) generate it from original `lib.dom.d.ts` (as well as `lib.webworker.d.ts`) ?
* This regular expression is used to extract interface and type declarations (and also comments):
```ts
/(^(type|interface|declare type) [^\n]*(\{\n([^\n]+\n)*\}|;)|\/\/[^\n]*|\/\*.*?\*\/)/m
// or use this if you don't want comments:
/^(type|interface|declare type) [^\n]*(\{\n([^\n]+\n)*\}|;)/m
```
* The original `setTimeout` signature (and also `setInterval`) is replaced by:
```ts
<A extends any[]>(handler: (...args: A) => void, timeout?: number, ...arguments: A): number;
```

## How can I use it in my project ?

* Just use our project, or the `tsconfig.json`, as a template
* Or just avoid including `DOM` in `lib`, and include our `d.ts` in `include`

## What are the future plans for this project ?
* Type declarations can be merged into a single `types.dom.d.ts`, so that `types.worker.d.ts` can be no longer needed.
   * service workers and web workers are already sharing the same type declarations. The size and work can be both reduced by merging everything into one.
* All the `d.ts` files need to be updated timely to catch up new web standards and APIs.
* `self.addEventListener` can be made safer by removing the alternative signature, which is already removed in `service.worker.d.ts`.
   * Surely it will affect custom events, but you can always declare overload signatures for them: we just don't want the `string`-`Event` one.
