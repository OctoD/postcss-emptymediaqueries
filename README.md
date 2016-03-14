# postcss-emptymediaqueries
[![Build Status](https://travis-ci.org/ride-css/postcss-emptymediaqueries.svg?branch=master)](https://travis-ci.org/ride-css/postcss-emptymediaqueries)

Removes empty media queries

## Install

Install [postcss](https://github.com/postcss/postcss) if you've not done it yet.

```bash
  npm install postcss-emptymediaqueries --save
```

## Usage

```js
postcss([
  emptymediaqueries({ /* options */ })
])

```

#### Options

**log** (boolean): if set to true, a wild log entry will appear into your shell.
