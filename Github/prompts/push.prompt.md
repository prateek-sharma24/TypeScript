---
name: push
description: Review, commit, and push TypeScript project changes to GitHub
argument-hint: Optional commit message
agent: agent
---

Help me commit and push changes from my TypeScript project to GitHub.

Follow these steps in order:

1. Inspect the current Git branch, remote, and working tree using Git commands.
2. Review the changed files and summarize what will be committed.
3. Check for secrets, passwords, tokens, API keys, and other sensitive files. Do not stage or commit them.
4. Check the project's Git status and avoid including unrelated changes.
5. Run appropriate checks for the changes, if available.
6. Prepare a concise commit message based on the actual changes. If I provided a commit message, use it.
7. Show me the files to be committed and the proposed commit message. Ask for my confirmation before staging, committing, or pushing.
8. After confirmation, stage only the intended files, create the commit, and push the current branch to its configured upstream.
9. If no upstream exists, explain the issue and ask before configuring one.
10. Never force-push, delete branches, discard changes, or overwrite remote history.
11. If there are merge conflicts, authentication problems, or push failures, stop and explain how to resolve them.

At the end, report the commit hash, branch, and push result. Never claim success unless the commands confirm it.