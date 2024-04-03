# KIRA's Ecosystem

Welcome to the KIRA Ecosystem repository! This is the place to showcase your innovative ideas built on the KIRA network. By submitting your project, we'll create a dedicated card in our documentation, complete with links to your online presence and other media.

To get started, establish an online presence for your project, whether it's a website or a Twitter account. This will lend credibility to your submission. Then, follow these simple steps to present your idea:

1. Clone this branch:

```bash
git clone --single-branch --branch ecosystem https://github.com/KiraCore/docs.kira.network.git
```

2. Create a new branch and edit the JSON file:

```bash
git checkout -b project-name
```

Add your project details into the `details.json` file. 
Name, Title, Description are required fields; any unused fields must be left blank "".

```bash
git add .      
git commit -m "commit message"
```

3. Install GitHub CLI if you don't have it yet (https://github.com/cli/cli#installation), and authenticate yourself:

```bash
gh auth login 
```

4. Submit a PR to the `ecosystem` branch: 

> [!WARNING]  
> Make sure all information is correct before creating the PR.

```bash
git checkout project-name
gh pr create --base ecosystem  --title "project name"
```