module.exports = ({ env }) => ({
  //...
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
})
