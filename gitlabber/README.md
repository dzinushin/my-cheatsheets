

```
pip install gitlabber

# setup .envrc
cat .envrc
export GITLAB_URL=https://gitlab.example.com
export GITLAB_TOKEN=!!!!!!!!!!!!!!!!!
export GITLABBER_INCLUDE="/dz/subproject1**,/dz/subproject1**"

# run clone
gitlabber .
```