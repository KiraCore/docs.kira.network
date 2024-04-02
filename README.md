# Ecosystem

Welcome to KIRA's Ecosystem Submission page. If you wish to express your interest in building with us, you are at the right place. We will make a special ecosystem project card for you in our documentation where you are promoted with references to all your media. All you have to do is create a website or at least a Twitter account to give your submission credibility, and push a PR to this repo to present your idea by following these simple steps:

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