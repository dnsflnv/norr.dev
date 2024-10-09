---
tags:
  - git
  - stash
  - rebase
  - amend
  - version
---
## Rebase

```bash 
git checkout main 
git pull origin main 
git checkout my_branch 
git rebase main 
git rebase --continue 
# + means force, overwrite changes
git push origin +my_branch 
# If something goes wrong 
git rebase --abort
```
## Stash

Hide all new changes, except new files.
```sh
git stash #hide
git stash pop #restore
```

## Add to the last commit

```sh
git commit --amend --no-edit
git push origin +my_branch 
```
## Delete the last commit

```bash 
# delete changes or save in the working dir 
git reset --hard HEAD~1 
git reset --soft HEAD~1 
git push origin --force
```

## Workflow for Quartz

```sh
git add . && git commit -m "Update." && git push
```