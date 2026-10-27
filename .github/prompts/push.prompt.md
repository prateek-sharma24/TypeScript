---
description: "Review all changes for defects, get approval, then commit and push selected files"
agent: "agent"
---

When I run `/push`, execute the workflow below. Do not treat invoking `/push` as approval to commit or publish. Report each phase clearly and stop whenever the workflow says to wait.

1. Confirm the repository root with `git rev-parse --show-toplevel`, then inspect `git status --short --branch`. Run Git commands from that repository root.
2. Review every staged, unstaged, deleted, renamed, and untracked change—not just the active editor file. Inspect the complete contents/diffs for each intended new or modified file. Check syntax, behavior, logic, boundary conditions, and relevant tests where practical.
3. Exclude generated or irrelevant files, especially `node_modules/`, build output, temporary files, secrets, credentials, and unrelated changes. Never stage the entire working tree blindly. Do not overwrite or include pre-existing staged work without identifying and reviewing it.
4. If any intended file has a defect, list the exact file and explain the concrete problem and impact. Do not edit, stage, commit, or push any affected file yet. Ask whether I want you to fix it, exclude it, or proceed with it as-is, and wait for my reply. If I approve a fix, make only the approved fix, validate it, then show the updated file and findings. If an issue remains, stop and ask again; never push a known unresolved issue without my explicit approval for that specific file.
5. Once the review is clean (or I have explicitly approved the disposition of each reported issue), show me the exact file list proposed for publication and ask me to approve those files for commit and push. Wait for an explicit approval before staging or committing. If I do not approve, stop without publishing.
6. After approval, stage only the approved paths using `git add -A -- <paths>`. Review both `git diff --cached --name-status` and `git diff --cached`; confirm that the staged changes contain only the approved files and intended content. If anything differs, stop and ask before proceeding.
7. If there are no staged changes, do not create an empty commit. If any staged change is unclear, unrelated, or potentially sensitive, stop and ask.
8. After the file list and staged diff match my approval, create a commit message with a concise subject and a descriptive body. The body must describe all substantive changes being published, grouped by file or related files, and list every published path (including `README.md` and this prompt when they are approved). Treat this complete commit message as the description of the push; do not omit changes because they seem small. If the commit fails, report the error and do not push.
9. Push the current branch to its configured upstream with `git push`. If there is no upstream, use `git push --set-upstream origin HEAD` only when the `origin` remote exists; otherwise stop and report the missing remote. Never force-push.
10. After a successful push, verify with `git status --short --branch` and report the commit, its complete description, published files, and push outcome. If the push is rejected or verification fails, report the error; do not hide it or resolve it by force-pushing.

If I approve fixing a file, that approval is only for the fix. It is not approval to commit or push; always get separate approval for the final exact file list.

For each `/push`, prepare a dated entry under a `Push History` section in `README.md` containing the same summary as the commit subject, a concise description of all substantive changes being published, and the exact files to publish. The README entry and commit body must agree. Include `README.md` and show the proposed entry in the exact file list presented for approval in step 5. Only after approval, append the entry and stage it with the other approved paths so the history is part of the same commit. If publication is declined, do not add or retain the proposed entry. Never rewrite earlier history entries.
