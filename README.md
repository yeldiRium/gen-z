# Gen-z

UNMAINTAINED - Since I don't use it and it's still JS, not TS, I'm not going to maintain this any longer.

Next generation (lol) generator helpers.

Think any utility library (ramda, lodash) but for generators.

```sh
npm install @yeldirium/gen-z
# or
yarn install @yeldirium/gen-z
```


## Status

| Category         | Status                                                                                                  |
| ---------------- | ------------------------------------------------------------------------------------------------------- |
| Version          | [![npm](https://img.shields.io/npm/v/@yeldirium/gen-z)](https://www.npmjs.com/package/@yeldirium/gen-z) |
| Dependencies     | ![David](https://img.shields.io/david/yeldirium/gen-z)                                                  |
| Dev dependencies | ![David](https://img.shields.io/david/dev/yeldirium/gen-z)                                              |
| Build            | ![GitHub Actions](https://github.com/yeldiRium/gen-z/workflows/Release/badge.svg?branch=master)         |
| License          | ![GitHub](https://img.shields.io/github/license/yeldiRium/gen-z)                                        |

## Short guide

Everything with more than one parameter is curried.

Process and acknowledge events from somewhere:

```javascript
const g = require('gen-z').sync;
const generator = fetchEventsAsGenerator(fromSomewhere);

const acknowledgable = g.acknowledgable(generator, acknowledgeEventCallback);

g.forEach(
  event => {
    try {
      processEventSomehow(event);
    
      // Acknowledge the event.
      return true;
    } catch {
      // Or make the generator re-yield the event.
      return false;
    }
  },
  acknowledgable
);
```

Get the powers of 2 from 2^10 to 2^15:

```javascript
const g = require('gen-z').sync;

console.log(
    g.collect(
        g.take(
            5,
            g.drop(
                10,
                g.iterate(a => a * 2, 1)
            )
        )
    )
);
```

## Documentation

[Here.](./API.md)
