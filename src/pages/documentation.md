---
title: Documentation
---
# Documentation

## Table of contents
- [Documentation](#documentation)
  - [Table of contents](#table-of-contents)
  - [Add page](#add-page)
  - [Tests](#tests)
    - [Local test](#local-test)
    - [Deployment test](#deployment-test)


The project documentation is created using [Docusaurus](https://docusaurus.io/), hosted on GitHub Pages.

## Add page

To add a page, simply create a new markdown or react file in the `src/pages` directory. The file should have a front matter block at the top with a `title` field. The title will be used as the page's title.  
Then add a link to the page in the `src/pages/index.md` file.

## Tests

### Local test

To test the documentation locally, run the following command:

```bash
npm run start
```
Then open your browser and go to `http://localhost:3000`.

### Deployment test

To deploy the documentation, run the following command:

```bash
npm run build
npm run deploy
```
To test, open your browser and go to `https://domain.github.io/tableTop/`.