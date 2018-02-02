# Mocha needs YOU!
1. Increase test coverage on Node.js and browser
   - Increase integration coverage for all reporters
     - `html` reporter must be tested in browser
     - ~~Basic console reporters (*not* `nyan`, `landing`, etc.) must be tested in **both** browser and Node.js contexts~~
     - ~~Filesystem-based reporters must be tested in Node.js context~~
     - **UPDATE - May 24 2017**: Thanks to [community contributions](https://github.com/mochajs/mocha/blob/master/CHANGELOG.md#mag-coverage), the coverage on most reporters has increased dramatically!  The `html` reporter is still in [dire need of coverage](https://coveralls.io/builds/11674428/source?filename=lib%2Freporters%2Fhtml.js).
   - Increase coverage against all interfaces (`exports` in particular).  Ideally this becomes a "matrix" where we repeat sets of integration tests across all interfaces.
   - Refactor non-Node.js-specific tests to allow them to run in a browser context.  Node.js-specific tests include those which *require* the CLI or filesystem.  Most everything else is fair game.
1. Review current open pull requests
    - We need individuals familiar with Mocha's codebase. Got questions?  Ask them in [our chat room](https://gitter.im/mochajs/mocha).
    - Pull requests **must** have supporting tests.  The only exceptions are pure cosmetic or non-functional changes.
    - Pull request contributors must sign [the CLA](https://cla.js.foundation/mochajs/mocha).
1. Close old, inactive issues and pull requests
    - ~~A bot should do this.  We need a bot. Got a bot?~~ We now use GitHub's own [probot-stale](https://www.npmjs.com/package/probot-stale).
1. Triage issues
   - If we run into "critical" bugs, they need fixing.
   - "Critical" means Mocha is broken w/o workarounds for a *large percentage* of users
   - Otherwise: respond to issues, close new dupe issues, confirm bugs, ask for more info, etc.

## Backers

[Become a backer](https://opencollective.com/mochajs#backer) and show your support to our open source project.

[![MochaJS Backer](https://opencollective.com/mochajs/backer/0/avatar)](https://opencollective.com/mochajs/backer/0/website)
[![MochaJS Backer](https://opencollective.com/mochajs/backer/1/avatar)](https://opencollective.com/mochajs/backer/1/website)
[![MochaJS Backer](https://opencollective.com/mochajs/backer/2/avatar)](https://opencollective.com/mochajs/backer/2/website)
[![MochaJS Backer](https://opencollective.com/mochajs/backer/3/avatar)](https://opencollective.com/mochajs/backer/3/website)
[![MochaJS Backer](https://opencollective.com/mochajs/backer/4/avatar)](https://opencollective.com/mochajs/backer/4/website)
[![MochaJS Backer](https://opencollective.com/mochajs/backer/5/avatar)](https://opencollective.com/mochajs/backer/5/website)
[![MochaJS Backer](https://opencollective.com/mochajs/backer/6/avatar)](https://opencollective.com/mochajs/backer/6/website)
[![MochaJS Backer](https://opencollective.com/mochajs/backer/7/avatar)](https://opencollective.com/mochajs/backer/7/website)
[![MochaJS Backer](https://opencollective.com/mochajs/backer/8/avatar)](https://opencollective.com/mochajs/backer/8/website)

## Sponsors

Does your company use Mocha?  Ask your manager or marketing team if your company would be interested in supporting our project.  Support will allow the maintainers to dedicate more time for maintenance and new features for everyone.  Also, your company's logo will show [on GitHub](https://github.com/mochajs/mocha#readme) and on [our site](https://mochajs.org) - who doesn't want a little extra exposure?  [Here's the info](https://opencollective.com/mochajs#sponsor).

[![MochaJS Backer](https://opencollective.com/mochajs/sponsor/0/avatar)](https://opencollective.com/mochajs/sponsor/0/website)
[![MochaJS Backer](https://opencollective.com/mochajs/sponsor/1/avatar)](https://opencollective.com/mochajs/sponsor/1/website)
[![MochaJS Backer](https://opencollective.com/mochajs/sponsor/2/avatar)](https://opencollective.com/mochajs/sponsor/2/website)
[![MochaJS Backer](https://opencollective.com/mochajs/sponsor/3/avatar)](https://opencollective.com/mochajs/sponsor/3/website)
[![MochaJS Backer](https://opencollective.com/mochajs/sponsor/4/avatar)](https://opencollective.com/mochajs/sponsor/4/website)
[![MochaJS Backer](https://opencollective.com/mochajs/sponsor/5/avatar)](https://opencollective.com/mochajs/sponsor/5/website)
[![MochaJS Backer](https://opencollective.com/mochajs/sponsor/6/avatar)](https://opencollective.com/mochajs/sponsor/6/website)

## License

[MIT](LICENSE)

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fmochajs%2Fmocha.svg?type=large)](https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fmochajs%2Fmocha?ref=badge_large)