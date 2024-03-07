# KIRA Network Documentation Repository

This repository is responsible for creating the documentation for KIRA Network. It leverages nocusaurus to extract content from KIRA's Notion workspace using the Notion API. The content is then transformed into Markdown format and integrated into Docusaurus v3, which generates static HTML files from Markdown.

## Release Workflow: Notion Pages to IPFS

- A custom Docker image with Chromedriver preinstalled is initialized.
- The nocusaurus tool is installed. It converts KIRA's Notion documentation pages into MDX format.
- Docusaurus is set up using docusaurus.config.js to generate HTML from the nocusaurus output in the ./build directory.
- Our custom IPFS API tool interacts with Pinata to pin the content of the ./dist/notion folder.
- The ./dist/notion folder, along with the CID hash in ./ipfs-cid.txt, is pushed to a dedicated repository. The push uses the format <branch>-release.
- A simple HTML page utilizes <branch>-release/ipfs-cid.txt to locate the IPFS-hosted page, allowing user redirection via a DNS name.

## How to Use

### Installation:

1. **Clone Repository**: Clone the repository to your local machine.
2. **Set Required Environment Variables**: Set `GIT_PASS` and `GIT_USER` for GitHub deployment, and `DOCU_NOTION_SAMPLE_ROOT_PAGE` and `DOCU_NOTION_INTEGRATION_TOKEN` for Notion integration.
   - For GitHub Deployment:
     ```bash
     export GIT_PASS=[***]
     export GIT_USER=[***]
     ```
   - For Notion Integration:
     ```bash
     export DOCU_NOTION_SAMPLE_ROOT_PAGE=[***]
     export DOCU_NOTION_INTEGRATION_TOKEN=[***]
     ```
   Follow the [Docusaurus deployment documentation](https://docusaurus.io/docs/deployment#environment-settings) and [Notion's integration setup guide](https://developers.notion.com/docs/create-a-notion-integration#give-your-integration-page-permissions) for more details.

### Site Update & Deployment:

Update content on Notion and fetch it: 

```bash
yarn install    # Install dependencies
yarn pull       # Fetch content from Notion (needs $DOCU_NOTION_SAMPLE_ROOT_PAGE and $DOCU_NOTION_INTEGRATION_TOKEN )
yarn build      # Build Docusaurus static site
```

Test and deploy with the following commands:

```bash
yarn serve      # Serve Docusaurus static site locally for testing before production deployment
yarn deploy     # Deploy to GitHub Pages (needs $GIT_PASS and $GIT_USER)
```