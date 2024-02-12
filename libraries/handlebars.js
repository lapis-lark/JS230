let post1 = {
  title: 'Lorem ipsum dolor sit amet',
  published: 'April 1, 2015',
  body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
  tags: ['goofy', 'heartbreaking', 'grand'],
};

let post2 = {
  title: 'abracazoodle',
  published: 'April 2, 2019',
  body: 'hoo boy natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
  tags: ['sweltering', 'perspicacious', 'marsupial'],
};

let posts = {posts: [post1, post2]};

posts.posts.forEach(post => post.body = '<p>' + post.body + '</p>');

Handlebars.registerPartial('postTags', $('#postTags').html());
let postTemplate = Handlebars.compile($('#post').html());

let body = $('body');
body.append(postTemplate(posts));

