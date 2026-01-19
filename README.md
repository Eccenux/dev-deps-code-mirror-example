# Web dependencies PoC

Could this work in a browser? Maybe.

## Generating deps file

### Generating from nothing

```bash
npm init # or quicker: npm init -y
npm install codemirror @codemirror/lang-javascript
```

### Generating for a real project

1. Remove `"devDependencies"` from `package.json`, e.g. replace it with `"devDependencies--off"`.
1. Run `npm install`.
1. Copy the generated `package-lock.json` to the remote server (or to some distribution artifact repository).
1. Implement `pkg-map="./package-lock.json"` support in a browser ;)

## See also

- Lea Verou, [*Web dependencies are broken. Can we fix them?*](https://lea.verou.me/blog/2026/web-deps/), lea.verou.me, 2026.