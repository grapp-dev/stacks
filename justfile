build:
  rm -rf ./lib
  bun run tsup

test:
  bun run tsc --pretty --noEmit
  bun run eslint ./src

publish tag="latest": test build
  @echo "Using tag: {{tag}}"
  npm publish --tag {{tag}}

