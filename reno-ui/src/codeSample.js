let configCode = `module.exports = {
    endpoint: 'https://api.github.com/',
    token: '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',
    platform: 'github',
    logLevel: 'debug',
    onboardingConfig: {
        extends: ['config:base', ':dependencyDashboard'],
    },
    repositories: ['vaemsdev/reno-py'],
    renovateFork: true,
    gitAuthor: "VAEMSDEV <vaemsdev@gmail.com>",
    username: "vaemsdev",
    onboarding: false,
    printConfig: true,
    requireConfig: false,
    recreateClosed: true,
    "packageRules": [
       
    ]
};`

let workflowCode =
    `name: Renovate
on:
  [push]
  # schedule:
  # The "*" (#42, asterisk) character has special semantics in YAML, so this
  # string has to be quoted.
  # - cron: '0/5 * * * *'
jobs:
  renovate:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3.3.0
      - name: Renovate Github
        uses: renovatebot/github-action@v34.82.0
        with:
          configurationFile: ./.github/config.js
          token: \${{ secrets.RENOVATE_TOKEN }}`;


export { configCode, workflowCode }