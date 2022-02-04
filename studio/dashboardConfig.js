export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61fd62d14ba8324fadc8c049',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-a7ozk75c',
                  apiId: 'a91f19e1-7c3f-4283-b9f3-e492ebd0726b'
                },
                {
                  buildHookId: '61fd62d24ba8324a7fc8c4ea',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-k38dxd74',
                  apiId: 'cec29949-1540-42fc-92af-efac503017f4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/web-warrior/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-k38dxd74.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
