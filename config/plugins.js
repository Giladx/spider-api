module.exports = ({ env }) => ({
  // ...
  "netlify-deployments": {
    enabled: true,
    config: {
      accessToken: process.env.NETLIFY_DEPLOYMENTS_PLUGIN_ACCESS_TOKEN,
      sites: [
        {
          name: 'deluxe-concha-6c3afd',
          id: "d27d56a1-a425-498e-b0eb-a12773f8cf62",
          buildHook: "https://api.netlify.com/build_hooks/649206a6a0b3192336011408",
          branch: 'main' // optional
        }
      ]
    },
  },
  
  // ...
  'import-export-entries': {
    enabled: true,
    config: {
      serverPublicHostname: 'https://dashboard.render.com/', // Default:"".
    },
  },
  // ...
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: 'dokmtdzkb',
        api_key: '237439771513994',
        api_secret: '0IRg5g2QD5ZQInGEWHt2Wqdo9CY',
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  // ...
  'update-static-content': {
    enabled: false,
    config: {
      githubToken: env('GITHUB_TOKEN'), // accessing personal github token from env file
      owner: 'giladx', // owner of the repo
      repo: 'gatsby-spet', // name of the repo
      workflowId: 'gatsby.yml', // workflowId OR filename
      branch: 'main', // branch name
      roles: ['strapi-super-admin'], // roles to access the plugin, by omitting roles any user can access the plugin
    },
  },
 // ... 
 "vercel-deploy": {
    enabled: true,
  },
 // ...
 
})
