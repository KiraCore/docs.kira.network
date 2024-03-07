# KIRA Network Documentation Repository

This repository is responsible for creating the documentation for KIRA Network. It leverages nocusaurus to extract content from KIRA's Notion workspace using the Notion API. The content is then transformed into Markdown format and integrated into Docusaurus v3, which generates static HTML files from Markdown.

## Release Workflow: Notion Pages to IPFS

- A custom Docker image with Chromedriver preinstalled is initialized.
- The nocusaurus tool is installed. It converts KIRA's Notion documentation pages into MDX format.
- Docusaurus is set up using docusaurus.config.js to generate HTML from the nocusaurus output in the ./build directory.
- Our custom IPFS API tool interacts with Pinata to pin the content of the ./dist/notion folder.
- The ./dist/notion folder, along with the CID hash in ./ipfs-cid.txt, is pushed to a dedicated repository. The push uses the format <branch>-release.
- A simple HTML page utilizes <branch>-release/ipfs-cid.txt to locate the IPFS-hosted page, allowing user redirection via a DNS name.

## How to Use This Repository

- Make a commit to the dev branch.
- Push the changes and await the completion of GitHub Actions.
GitHub Actions will publish the results to IPFS and provide a demo link in the comments of the automatically created pull request (PR).
- Review the IPFS demo. If satisfactory, merge the PR into the master branch.