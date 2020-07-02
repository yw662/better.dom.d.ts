# Better.dom.d.ts

A (maybe) better `d.ts` for `DOM` (or more),
built upon TypeScript's automatically generated `lib.dom.d.ts`

## What improvements it provides ?
* Separated interface and type declarations in `types.dom.d.ts`
* Explicit `namespace window` in `window.dom.d.ts`
* Type safe `window.setTimeout` and `window.setInterval` signature
* Maybe\<Improvement>: Optional semicolons removed to shrink size
    * Can be put back easily by some formatting tools

## How do you (can I) generate it from original `lib.dom.d.ts` ?
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
