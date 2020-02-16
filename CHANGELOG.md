# [2.2.0](https://github.com/yeldiRium/gen-z/compare/v2.1.1...v2.2.0) (2020-02-16)


### Bug Fixes

* Add tests for compat of sync/async.from with other generators. ([c759e31](https://github.com/yeldiRium/gen-z/commit/c759e31419c30130859319d301b66afe0e1fc506))
* Fix year in license. ([ed71801](https://github.com/yeldiRium/gen-z/commit/ed71801ab3193952591801d29c7561f1f91fb30c))


### Features

* Add async versions of all relevant create and remove functions. ([37c0b01](https://github.com/yeldiRium/gen-z/commit/37c0b0122fda2b455e9db8494850c95285b390c8))
* Add async versions of all relevant search and transform functions. ([a50255c](https://github.com/yeldiRium/gen-z/commit/a50255c6fa17892d69ec8e85d139f6d65f72ef3a))
* Implement async acknowledgable and retryable. ([0ef2e2a](https://github.com/yeldiRium/gen-z/commit/0ef2e2abf058e33b7e6eb656e5a25edd6b0aa0f2))
* Make sync.create.repeat call the given function, if it gets one. ([7a125ed](https://github.com/yeldiRium/gen-z/commit/7a125ed55128ef9ee8063e16f8c7fe83b3a5eb73))

## [2.1.1](https://github.com/yeldiRium/gen-z/compare/v2.1.0...v2.1.1) (2020-02-16)


### Bug Fixes

* Add some missing memberOf and async jsdocs annotations. ([af78a76](https://github.com/yeldiRium/gen-z/commit/af78a76150cd2ffc3996788836b6d8a6fb0445b4))

# [2.1.0](https://github.com/yeldiRium/gen-z/compare/v2.0.0...v2.1.0) (2020-02-16)


### Features

* Implement async.forEach and async.reduce. ([7cdf7ed](https://github.com/yeldiRium/gen-z/commit/7cdf7ed716f1b3d86062ae7a149fee2adfc289fd))

# [2.0.0](https://github.com/yeldiRium/gen-z/compare/v1.1.0...v2.0.0) (2020-02-15)


### Bug Fixes

* Remove obsolete require. ([a0fc2a0](https://github.com/yeldiRium/gen-z/commit/a0fc2a0f68fa6ae36550401ce1378d6e7c071e99))


### Features

* Implement forEach and echo; Add an example to the readme. ([a52712a](https://github.com/yeldiRium/gen-z/commit/a52712a82121e791d7f7de204ce22e0a8054464d))
* Implement retryable and acknowledgable. ([0e9d606](https://github.com/yeldiRium/gen-z/commit/0e9d606f8131f8ac5bba7513a5084f5746ce406f))
* Vastly improve documentation and restructure library. ([a45256a](https://github.com/yeldiRium/gen-z/commit/a45256a417000f17686c350c80ecbd5c267d4b07))


### BREAKING CHANGES

* Helpers for synchronous generators are now
under g.sync instead of directly under g.

# [1.1.0](https://github.com/yeldiRium/gen-z/compare/v1.0.3...v1.1.0) (2020-02-15)


### Features

* Implement async from and collect. ([69618b6](https://github.com/yeldiRium/gen-z/commit/69618b6ada4314849a2d12a993a41abd19f7a0a9))

## [1.0.3](https://github.com/yeldiRium/gen-z/compare/v1.0.2...v1.0.3) (2020-02-14)


### Bug Fixes

* Configure semantic release to actually commit the api docs. ([6e4f2aa](https://github.com/yeldiRium/gen-z/commit/6e4f2aa52efd2b3c53d160d5508047322b70f3af))

## [1.0.2](https://github.com/yeldiRium/gen-z/compare/v1.0.1...v1.0.2) (2020-02-14)


### Bug Fixes

* Move api docs generation to prepare step. ([aeb98cb](https://github.com/yeldiRium/gen-z/commit/aeb98cb743a24ff84342b298380a155ef3e5b035))

## [1.0.1](https://github.com/yeldiRium/gen-z/compare/v1.0.0...v1.0.1) (2020-02-14)


### Bug Fixes

* Fix package name. ([6eafcc7](https://github.com/yeldiRium/gen-z/commit/6eafcc7d7c44c8130dd3ea2bd9be86855e67e492))

# 1.0.0 (2020-02-14)


### Bug Fixes

* Expose filter and take. ([686fac6](https://github.com/yeldiRium/gen-z/commit/686fac6ab5b34cf2755471c98c9bafbb85e67954))
* Fix indentation in github action. ([7c0be9a](https://github.com/yeldiRium/gen-z/commit/7c0be9ab672722c6366a661221011654bbd397d0))


### Features

* Add a readme. ([d2214b2](https://github.com/yeldiRium/gen-z/commit/d2214b2a2cf555e9944d8211f5b00e7999ae4acb))
* Add filter function. ([b0f5b39](https://github.com/yeldiRium/gen-z/commit/b0f5b39756831d8b4df970ba3b7cec74aa9eca95))
* Add JSDoc to everything. ([bf29bd3](https://github.com/yeldiRium/gen-z/commit/bf29bd32879f349f8ea20137c2a71f1be72bcd15))
* Add take function. ([1e6212f](https://github.com/yeldiRium/gen-z/commit/1e6212f9abd7b9a7d7da4207f0589c91f7ae3b7d))
* Implement chain and concat. ([97a31f9](https://github.com/yeldiRium/gen-z/commit/97a31f98729483644b8b8502176360de68b62b5d))
* Implement cycle and iterate. ([19ffaed](https://github.com/yeldiRium/gen-z/commit/19ffaed6c6bb76f6d88fbf0892f099e1ee8caad6))
* Implement drop, dropWhile, head, tail and takeWhile. ([4ff5420](https://github.com/yeldiRium/gen-z/commit/4ff5420a90ec608337aa273ab0aebe80712a8c52))
* Implement dropRepeats. ([9498448](https://github.com/yeldiRium/gen-z/commit/949844898d21c8a44d927207cb738543f19860a5))
* Implement flatten. ([117f980](https://github.com/yeldiRium/gen-z/commit/117f980dcf0bc2c99e85add50ee46199594c51aa))
* Implement from. ([148cfd5](https://github.com/yeldiRium/gen-z/commit/148cfd598e44d375a540ec8de2cebbbdc8aa1e02))
* Implement map. ([49e796d](https://github.com/yeldiRium/gen-z/commit/49e796dc3e6ba61bb6bc53f21bd744bc77c9068f))
* Implement range and several collection functions. ([474ca1f](https://github.com/yeldiRium/gen-z/commit/474ca1ff72f7743ba31cadf272eaeabd26c7821b))
* Implement reduce. ([88c69c8](https://github.com/yeldiRium/gen-z/commit/88c69c8794ef7fc434bb0168311d4092fff9e4e5))
* Implement repeat. ([a68a59f](https://github.com/yeldiRium/gen-z/commit/a68a59fc201d3f72cad9df25fd9676213d710343))
* Implement some and find. ([713b5f8](https://github.com/yeldiRium/gen-z/commit/713b5f8ffa022024b05475a79b8e525d670c9dee))
* Implement tail using take. ([bcee064](https://github.com/yeldiRium/gen-z/commit/bcee06402f29e0684c44619998dafd37efb743b3))
* Implement zip. ([347a518](https://github.com/yeldiRium/gen-z/commit/347a518ff05b35a7cf1c3360c2b77e03d1aef022))
