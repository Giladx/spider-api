module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  // ...
  'cloudflare-pages': {
    enabled: true,
    config: {
      instances: [
        {
          name: env('CF_WEBSITE1_NAME'),
          hook_url: env('CF_HOOK1_URL')
        },
        {
          name: env('CF_WEBSITE2_NAME'),
          hook_url: env('CF_HOOK2_URL')
        },
      ]
    },
  },
  // ...
  "netlify-deployments": {
    enabled: true,
    config: {
      accessToken: process.env.NETLIFY_ACCESS_TOKEN,
      sites: [
        {
          name: process.env.NETLIFY_SITE_NAME,
          id: process.env.NETLIFY_SITE_ID,
          buildHook: process.env.NETLIFY_DEPLOY_HOOK,
          branch: process.env.NETLIFY_GIT_BRANCH // optional
        }
      ]
    },
  },
  // ...
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook: env('VERCEL_DEPLOY_HOOK'),
      apiToken: env('VERCEL_API_TOKEN'),
      appFilter: env('VERCEL_APP_FILTER'),
      teamFilter: env('VERCEL_TEAM_FILTER'),
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
  // ...
  'import-export-entries': {
    enabled: true,
    config: {
      // See `Config` section.
    },
  },
  //...
})
