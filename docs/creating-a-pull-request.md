# Creating a pull request

## Branching strategy

The MOD.UK Frontend repository is using a trunk-based development branching
strategy. All changes are merged directly into `main` using pull requests.

## Adding a new feature

With the latest version of `main` it is possible to create a feature branch.

```
// get the latest code
git switch main
git pull

// create a branch
git switch -c feature/<name>
```

Make changes to the feature branch, `commit` and `push` to the remote
repository. Open a PR and once approved `merge` into `main`.

## Committing

There is a strict policy around how code is committed to the repository to
encourage good developer practices. These good practices have an impact on the
review process and being able to produce automated release notes.

### Atomic commits

A set of changes are best suited to a single commit. It is useful to think about
the review process and presenting a series of commits which tell a story about
the overall change.

[One Commit. One Change.](https://medium.com/@fagnerbrack/one-commit-one-change-3d10b10cebbf)

### Conventional commits

Commit messages must follow the
[conventional commit](https://www.conventionalcommits.org) format, _a
specification for adding human and machine-readable meaning_.

#### Pattern

When committing use the following pattern:

```
// scope is optional
type(scope?): Subject
```

In the uncommon case of a breaking change (signifying that the next release will
be a major release), include a `!` after the type:

```
type!(scope?): Subject
```

#### Types

- build
- chore
- ci
- deps
- deps-dev
- docs
- feat
- fix
- perf
- refactor
- release
- revert
- style
- test

#### Subject

Good commit history is important for the peer review process and has historical
benefit to understand rationale for previous changes.

[How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit)

## Opening the pull request

Once a feature has been developed and committed locally then it is time to push
to the remote repository and open a pull request (PR) for peer review.

[Git Interactive Rebase, Squash, Amend and Other Ways of Rewriting History](https://thoughtbot.com/blog/git-interactive-rebase-squash-amend-rewriting-history)

### Fixups

During the review process feedback will be received. Some of this feedback may
mean changing the code. If the code is changed then a `fixup` commit will be
required. This ensures that a good commit history is maintained. The small
`fixup` commits help with the review process so the reviewer can see what has
changed since the last review, rather than reviewing the entire change again.

```
// associate change with previous commit
git commit --fixup <commit hash>
```

### Squashing

Once the PR has been signed off then it will be necessary to `rebase` the PR and
squash any `fixup` commits. Rebasing ensures that the branch contains the latest
changes and squashing maintains a clean commit history.

```
// get the latest code
git switch main
git pull

// use the feature branch
git switch feature/<name>

// replay feature branch changes after latest code
git rebase -i --autosquash origin/main
```

## Releasing the change

Releases are created and published by
[the release GitHub Actions workflow](https://github.com/defencedigital/moduk-frontend/actions/workflows/release.yml).

It runs automatically on a daily basis overnight. If a change is urgent, it can
also be run manually from the previous link (by someone with write access to
this repository).
