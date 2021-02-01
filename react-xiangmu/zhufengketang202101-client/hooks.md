"pre-commit":"lint-staged",
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
      "post-commit":"conventional-changelog -p angular -i CHANGELOG.md -s -r 0"