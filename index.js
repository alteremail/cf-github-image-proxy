export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    const parts = url.pathname.slice(1).split('/')
    const [owner, repo, branch, ...filePathParts] = parts
    const filePath = filePathParts.join('/')

    const githubUrl = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${filePath}`

    const resp = await fetch(githubUrl, {
      headers: {
        'Authorization': `Bearer ${env.GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3.raw'
      }
    })

    if (!resp.ok) {
      return new Response(`GitHub fetch failed: ${resp.status}`, { status: resp.status })
    }

    const headers = new Headers(resp.headers)
    headers.set('Cache-Control', 'public, max-age=3600')
    return new Response(resp.body, { status: resp.status, headers })
  }
}
