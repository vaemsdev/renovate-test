module.exports = {
    branchPrefix: 'vd-renovate/',
    gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
    onboarding: false,
    platform: 'github',
    repositories: ['vaemsdev/renovate-test'],
    packageRules: {
      "groupName": "all dependencies",
      "groupSlug": "all",
      "lockFileMaintenance": {
        "enabled": false
      },
      "packageRules": [
        {
          "groupName": "all dependencies",
          "groupSlug": "all",
          "matchPackagePatterns": [
            "*"
          ]
        }
      ],
      "separateMajorMinor": false
    }
};
