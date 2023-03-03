# forge-website

## Configuration

There are a number of data files that can be updated for each release without needing to make explicit changes to the website content:

* _data/routingrules.json
  
  This file contains the information to replace any occurrence of `latest` in a URL to a specific version number.

* forge-website/content/JsonFiles

  The main files to edit here for a given release are:

  * `downloads.json`
  * `licence-server-downloads.json`
  * `open_source.json`
  * `previous_versions.json`

  The data structures should be reasonably self-explanatory.

* forge-website/content/ForgeReleaseHistory

  This folder contains a Markdown (`.md`) file for each release to have the history displayed on the website.

* forge-website/content/LicenceServerReleasehistory

  This folder contains a Markdown (`.md`) file for each release to have the history displayed on the website.

## Making changes

All changes must be made against the `staging` branch first. Create a branch derived from that branch, make the required changes and raise a Pull Request from the modified branch to the `staging` branch.

Once those changes have been approved, merged and deployed, it is then possible to create a pull request from `staging` to `main`. Again, once those changes have been approved, they will be merged and then deployed automatically.

## Installation

Clone the repository and then run `yarn install`.

## Development

When developing the Forge website you should run:
yarn run dev
