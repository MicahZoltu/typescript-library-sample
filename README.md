# typescript-library-sample
A simple example of a TypeScript library.

## Build
```
cd library
npm install # one time
npm run build # run each time you change the code
```

## Watch
Optionally, you can setup a watch on the library so it auto-compiles on change so you don't have to manually recompile every time you change something:
```
cd library
# either
npm run watch-cjs
# or
npm run watch-es
```

If you are using VSCode, you can do `Terminal > Run Task... > watch all` which will start a TypeScript watcher of both ES and CJS builds.

## Test
```
cd test
npm install # one time
npm run test # run each time you want to test, make sure you build the library first or have a watch running!
```
Alternatively, once you have done `npm install` in `test` you can run the tests from `library`:
```
cd library
npm run test # you still need to build the library before run, or have a watch running against it!
```

## Publish
```
cd library
npm publish
```
Publishing will build both cjs and es, then run the tests, then copy the readme into the proper spot, then publish to NPM.
