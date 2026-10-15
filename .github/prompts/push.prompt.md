Before committing, inspect the entire Git working tree.

1. Run `git status --short` to identify modified, deleted, and untracked files.
2. Identify all intended project changes, not just the currently open file.
3. Check `.gitignore` and ensure no required source files are accidentally excluded.
4. Stage all intended changes in the repository using `git add -A` from the repository root.
5. Run `git diff --cached --name-status` and show me every staged file.
6. Compare the staged file list against the intended changes. If files are missing, investigate before continuing.
7. Ask for confirmation before committing and pushing.
8. After confirmation, commit the staged changes and push the current branch.
9. Verify the commit contains all intended files using `git show --stat --oneline HEAD`.
10. Never force-push or include secrets, credentials, or unrelated files.