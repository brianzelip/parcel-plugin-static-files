# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.2.1] - 2019-12-04

- branch: master
- description: Add changelog

### Added

- CHANGELOG.md

## [0.2.0] - 2019-12-04

- branch: master
- description: publish module with the basic functionality of logging out the Parcel bundle that gets passed to all plugins
  - since this is a parcel plugin there is no easy local development feedback loop; to see your plugin in action, it must be published to npm and installed in a project

### Added

- index.js: create the absolute minimum of a parcel plugin that uses the `bundled` event to console log out the `bundler` object

### Updated

- package\*: add personal scope to the name of the module to install like `npm i -D @bzelip/parcel-plugin-static-files`

## [0.1.0] - 2019-12-03

- branch: master
- description: set up the project

### Added

- .gitignore
- LICENSE
- README.md
- package\*.json
