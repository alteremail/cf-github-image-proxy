# Cloudflare Workers Github Image Proxy

A simple Cloudflare Workers script to proxy images from GitHub private repositories.

This makes it easy to publicly expose images from a private repository and reference them as you would from a CDN.

## Getting Started

1. Create a GitHub Personal Access Token (PAT).

    - Go to your personal GitHub settings [here](https://github.com/settings/tokens) and add a new token with `repo` scope
1. Create a Cloudflare Worker 

    - Log in to your Cloudflare account and create a new Worker, name it `cf-github-image-proxy`
    - Choose "Import a repository" and then "Clone a public repository via Git URL"
    - Paste in this repo's Git URL: 
      ```
      https://github.com/alteremail/cf-github-image-proxy.git
      ```
    - Add an Environment Variable of Type `Secret`, name it `GITHUB_TOKEN` and set its Value to your GitHub PAT
1. Deploy the Worker
1. Set up a custom domain for your Worker (optional)

## Usage

Given a private GitHub repo located at:

```
https://github.com/username/repository
```

Imagine you have an image inside that repo, at `images/sample.png`. 

So it'd be accessible at:

```
https://github.com/username/repository/blob/main/images/sample.png
```

Assuming you set a custom domain for your Worker in Cloudflare like `img.example.com`, you can access the image via the proxy like this:

```
https://img.example.com/username/repository/main/images/sample.png
```
