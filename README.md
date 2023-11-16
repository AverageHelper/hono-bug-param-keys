# hono-bug-param-keys

Minimal reproduction of a Hono bug where a param value of `"keys"` sometimes gets resolved as `Array.prototype.keys` instead of the string value `"keys"`.

## Using this repository

Install dependencies

```sh
$ npm ci
```

Run tests

```sh
$ npm test
```

## Expected results

All tests pass.

## Actual result

As of Hono 3.10.1, one test fails: where the param value is `"keys"`, the result erroneously is a function named `keys`, likely from `Array.prototype.keys` from some internal structure.
