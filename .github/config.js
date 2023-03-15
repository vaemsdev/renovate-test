module.exports = {
    branchPrefix: 'vd-renovate/',
    gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
    onboarding: false,
    platform: 'github',
    repositories: ['vaemsdev/renovate-test'],
    separateMajorMinor: false,
    recreateClosed: true,
    packageRules: [
        {
            "groupName": "all dependencies",
            "groupSlug": "all",
            "matchPackagePatterns": [
                "*"
            ]
        }
    ]
};
