# KIRA's Ecosystem

Welcome to the KIRA Ecosystem repository! This is the place to showcase your innovative ideas built on the KIRA network. By submitting your project, we'll create a dedicated card in our documentation, complete with links to your online presence and other media.

To get started, establish an online presence for your project, whether it's a website or a Twitter account. This will lend credibility to your submission. Then, follow these simple steps to present your idea:

## Clone this branch:

```bash
git clone --single-branch --branch ecosystem https://github.com/KiraCore/docs.kira.network.git
```

## Create a new branch and edit the JSON file:

```bash
git checkout -b project-name
```

Add your project details into the `details.json` file. 
Name, Title, Description are required fields; any unused fields must be left blank "".

```bash
git add .      
git commit -m "commit message"
```

## Push changes and submit PR to the `ecosystem` branch (or submit PR directly using `gh`):

> [!WARNING]  
> Make sure all information is correct before creating the PR.

You can submit the PR using one of the following methods:

*Method 1: Using a remote repository and the GitHub website*

```bash
git remote set-url origin <your_remote_repository_url>
git push origin <branch_name>
```
Then, open a PR manually via the GitHub frontend.

*Method 2: Using the GitHub CLI (`gh`)*

  1. Install the GitHub CLI if you haven't already by following the instructions at https://github.com/cli/cli#installation.
  2. Authenticate yourself:

```bash
gh auth login
```
3. Create the PR:

```bash
git checkout project-name
gh pr create --base ecosystem --title "project name"
```