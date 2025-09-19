# Cloudflare Workers Github Image Proxy

A simple Cloudflare Workers script to proxy images from GitHub private repositories.

## Getting Started

1. Create a GitHub Personal Access Token (PAT).

    - Go to your personal GitHub settings [here](https://github.com/settings/tokens) and add a new token with `repo` scope
1. Create a Cloudflare Worker 

    - Log in to your Cloudflare account and create a new Worker, name it `cf-github-image-proxy`
    - Add an Environment Variable of type `Secret`, named `GITHUB_TOKEN`, the value is your GitHub PAT
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
