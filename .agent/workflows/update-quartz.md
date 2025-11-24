---
description: Update Quartz from upstream repository
---

# Update Quartz from Upstream

This workflow guides you through updating your Quartz digital garden from the official upstream repository.

## Prerequisites

- Ensure you have committed or stashed any local changes
- Consider creating a backup branch before updating

## Steps

### 1. Add upstream remote (first time only)

```bash
git remote add upstream https://github.com/jackyzha0/quartz.git
```

If you get "remote upstream already exists", skip this step.

### 2. Fetch latest changes from upstream

// turbo
```bash
git fetch upstream
```

### 3. Merge upstream changes

```bash
git merge upstream/v4
```

**Note:** You may encounter merge conflicts, especially in:
- `quartz.config.ts` (your custom configuration)
- `quartz.layout.ts` (your custom layout)
- `package.json` and `package-lock.json` (dependency updates)
- `docs/configuration.md` (if you've customized documentation)

If conflicts occur, resolve them manually by:
1. Opening each conflicted file
2. Choosing which changes to keep (yours, upstream, or both)
3. Removing conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`)
4. Staging the resolved files: `git add <filename>`

### 4. Clean install dependencies

After resolving conflicts, ensure a clean dependency installation:

// turbo
```bash
rm -rf node_modules package-lock.json
```

// turbo
```bash
npm install
```

### 5. Test the build

// turbo
```bash
npx quartz build
```

### 6. Test locally (optional)

```bash
npx quartz build --serve
```

Visit `http://localhost:8080` to verify everything works correctly.

### 7. Commit the merge

```bash
git commit -m "Merge upstream Quartz v4 updates"
```

### 8. Push to your repository

```bash
git push
```

## Troubleshooting

### Missing module errors

If you encounter "Cannot find module" errors after merging:

1. Delete `node_modules` and `package-lock.json`
2. Run `npm install` again
3. This ensures all new dependencies are properly installed

### Merge conflicts in package files

For `package.json` and `package-lock.json`:
- Generally accept upstream changes (theirs)
- Then reinstall: `rm -rf node_modules package-lock.json && npm install`

### Configuration conflicts

For `quartz.config.ts` and `quartz.layout.ts`:
- Keep your customizations
- Manually integrate any new features from upstream you want to use

## Notes

- Your `content/` directory is safe - it contains your personal content and won't be affected
- Always test locally before pushing to production
- Review the [Quartz changelog](https://github.com/jackyzha0/quartz/releases) to see what's new
