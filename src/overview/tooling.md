# Tooling

Building and structuring projects should feel way like Cargo from the Rust language, at least in the Whack engine.

## Configuration ease

Configuring ShockScript projects is way easier compared to other technologies.

Unlike NPM + TypeScript, you do not have to worry about transpilation or whatsoever when building libraries or applications; not even comparable as ShockScript targets WebAssembly.If you were implementing a library in NPM + TypeScript, you were forced to transpile TypeScript to JavaScript first due to the `tsconfig.json` file which is ignored from third-party dependencies while compiling, otherwise you would get inconsistent transpilation or compiler errors.

## Whack case

### API documentation

API documentation is automatically built for packages that are published to the Whack package registry.