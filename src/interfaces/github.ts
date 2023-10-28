export interface GithubRepo {
    full_name: string;
    html_url: string;
    description: string;
    stargazers_count: number;
    languages: string[];
}

export interface GithubOwner {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: Boolean;
};

export interface GithubLicense {
    key: string;
    name: string;
    spdx_id: string;
    url: string;
    node_id: string;
};

export interface GithubPermission {
    admin: Boolean;
    maintain: Boolean;
    push: Boolean;
    triage: Boolean;
    pull: Boolean;
}

export interface GithubRepoResponse {
    id: number;
    node_id: string;
    name: string;
    full_name: string;
    private: Boolean;
    owner: GithubOwner,
    html_url: string;
    description: string;
    fork: Boolean;
    url: string;
    forks_url: string;
    keys_url: string;
    collaborators_url: string;
    teams_url: string;
    hooks_url: string;
    issue_events_url: string;
    events_url: string;
    assignees_url: string;
    branches_url: string;
    tags_url: string;
    blobs_url: string;
    git_tags_url: string;
    git_refs_url: string;
    trees_url: string;
    statuses_url: string;
    languages_url: string;
    stargazers_url: string;
    contributors_url: string;
    subscribers_url: string;
    subscription_url: string;
    commits_url: string;
    git_commits_url: string;
    comments_url: string;
    issue_comment_url: string;
    contents_url: string;
    compare_url: string;
    merges_url: string;
    archive_url: string;
    downloads_url: string;
    issues_url: string;
    pulls_url: string;
    milestones_url: string;
    notifications_url: string;
    labels_url: string;
    releases_url: string;
    deployments_url: string;
    created_at: Date;
    updated_at: Date;
    pushed_at: Date;
    git_url: Date;
    ssh_url: string;
    clone_url: string;
    svn_url: string;
    homepage: string;
    size: number;
    stargazers_count: number;
    watchers_count: number;
    language: string | null;
    has_issues: Boolean;
    has_projects: Boolean;
    has_downloads: Boolean;
    has_wiki: Boolean;
    has_pages: Boolean;
    has_discussions: Boolean;
    forks_count: number;
    mirror_url: string | null;
    archived: Boolean;
    disabled: Boolean;
    open_issues_count: number;
    license: GithubLicense;
    allow_forking: Boolean;
    is_template: Boolean;
    web_commit_signoff_required: Boolean;
    topics: string[];
    visibility: string;
    forks: number;
    open_issues: number;
    watchers: number;
    default_branch: string;
    permissions: GithubPermission;
}