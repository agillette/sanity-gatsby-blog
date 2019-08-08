export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d4c91e181b2fec07b0fae5f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-vcx42mko',
                  apiId: '19023988-2934-43ec-9937-d71305a97d15'
                },
                {
                  buildHookId: '5d4c91e2c6c658b6fac0ec31',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-p5ermsfb',
                  apiId: 'bfa87f1b-2576-4fe0-b481-c10ba8b210f7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/agillette/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-p5ermsfb.netlify.com', category: 'apps'}
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
