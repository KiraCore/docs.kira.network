# KIRA Network Documentation Repository

This repository holds KIRA's documentation. It leverages Nocusaurus to extract content from KIRA's Notion workspace using the Notion API and transform it into sructured Markdown files. These files are then processed with Docusaurus v3 to generate static HTML files deployed via gutHub page.

Deployment branch: [docs.kira.network](https://github.com/KiraCore/docs.kira.network/tree/docs.kira.network)

# How to Use

## Installation:

1. **Clone Repository**: Clone the repository to your local machine.
3. **Install dependencies**:
```bash
yarn install    # Install dependencies
```
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

## Documentation Update & Deployment:

1. Update content on Notion and pull in `temp/` folder: 

```bash
yarn pull       # Fetch content from Notion (needs $DOCU_NOTION_SAMPLE_ROOT_PAGE and $DOCU_NOTION_INTEGRATION_TOKEN)
```

2. Sync the `tabs/` folder, move pages from "srcpage" tabs into `src/page/`folder if needed, then launch on localhost for testing:

> `rsync --checksum` (`yarn update`) syncs `tabs/` from the temporary folder, updating only changed files. It is used to preserve `showLastUpdateTime` in Docusaurus by avoiding the Nocusaurus pull process, which refreshes the entire output folder, falsely updating timestamps. However, renaming a page will not preserve history as it changes its file name and create a new one without git history.

```bash
yarn update     # Push modifications from temp/ to tabs/
yarn srcpages   # (Optional) This automatically move all custom pages from the tabs "srcpage" into the src/pages/ folder 
yarn start      # Start http://localhost:3000/ for testing
```

3. Confirm tests, then commit, push, build, serve if needed, and deploy:

> Committing and pushing updates made to `tabs` is necessary to maintain the Git history, essential for tracking each page's `showLastUpdateTime`.

```bash
git commit -a -m "commit message" # commit changes made to tabs/ etc...
git push
yarn build      # Build Docusaurus static site
yarn serve      # (Optional) Serve the build for additional testing before production deployment
yarn deploy     # Deploy to GitHub Pages (needs $GIT_PASS and $GIT_USER)
```