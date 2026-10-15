---
name: push
description: Review, commit, and push project changes to GitHub, regardless of language or framework
argument-hint: Optional commit message
agent: agent
---

Help me commit and push changes from this project to GitHub, regardless of its language, framework, or tooling.

Follow these steps in order:

1. Inspect the current Git branch, remote, and working tree using Git commands.
2. Review all staged, unstaged, and untracked changes; summarize the intended files and what they contain.
3. Check the intended changes for secrets, credentials, tokens, keys, and other sensitive data. Do not stage or commit sensitive files or values; report concerns without reproducing secret values.
4. Avoid including unrelated changes or disturbing existing staged work. Stage only the intended files after confirmation.
5. Identify the project's language, framework, and tooling from its files and documentation. Run the most relevant available checks for the changes (such as tests, linting, type checks, builds, or other project-specific validation). Do not assume a particular language or package manager; if no relevant checks are available, say so.
6. Prepare a concise commit message based on the actual changes. If I provided a commit message, use it.
7. Show me the files to be committed and the proposed commit message. Ask for my confirmation before staging, committing, or pushing.
8. After confirmation, stage only the intended files, create the commit, and push the current branch to its configured upstream.
9. If no upstream exists, explain the issue and ask before configuring one.
10. Never force-push, delete branches, discard changes, or overwrite remote history.
11. If there are merge conflicts, authentication problems, or push failures, stop and explain how to resolve them.

If there are no intended changes to commit, do not create an empty commit or push.

At the end, report the commit hash, branch, and push result. Never claim success unless the commands confirm it.