# [is-request-stream][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Check that given value is request stream

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![cov status][cov-img]][cov-url] [![dependency status][david-img]][david-url]


## Install
```
npm i is-request-stream --save
npm test
```


## Usage
> For more use-cases see the [tests](./test.js)

```js
var net = require('net')
var http = require('http')
var stream = require('stream')
var isRequestStream = require('is-request-stream')

var req = http.get('http://requestb.in/p21o4xp2')

isRequestStream(req) //=> true
isRequestStream(new net.Socket()) //=> false
isRequestStream(new stream.Readable()) //=> false
isRequestStream(new stream.Writable()) //=> false
isRequestStream(new stream.Transform()) //=> false
isRequestStream(new stream.Duplex()) //=> false
```


## Related
- [is-stream](https://github.com/sindresorhus/is-stream): Check if something is a Node.js stream
- [is-missing](https://github.com/tunnckocore/is-missing): Check that given `name` or `user/repo` exists in npm registry or in github as user repository.
- [is-typeof-error](https://github.com/tunnckocore/is-typeof-error): Check that given value is any type of error and instanceof Error
- [is-kindof](https://github.com/tunnckocore/is-kindof): Check type of given javascript value. Support promises, generators, streams, and native types. Thin wrapper around `kind-of` module.


## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/is-request-stream/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/is-request-stream
[npmjs-img]: https://img.shields.io/npm/v/is-request-stream.svg?label=is-request-stream

[license-url]: https://github.com/tunnckoCore/is-request-stream/blob/master/LICENSE.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/is-request-stream
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/is-request-stream.svg

[cov-url]: https://codeclimate.com/github/tunnckoCore/is-request-stream
[cov-img]: https://img.shields.io/codeclimate/coverage/github/tunnckoCore/is-request-stream.svg

[travis-url]: https://travis-ci.org/tunnckoCore/is-request-stream
[travis-img]: https://img.shields.io/travis/tunnckoCore/is-request-stream.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/is-request-stream
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/is-request-stream.svg

[david-url]: https://david-dm.org/tunnckoCore/is-request-stream
[david-img]: https://img.shields.io/david/tunnckoCore/is-request-stream.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg


[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/messages
[new-message-img]: https://img.shields.io/badge/send%20me-message-green.svg
