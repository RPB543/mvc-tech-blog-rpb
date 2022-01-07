const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    post_content: 'This is crazy',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_content: 'We should go swimming',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    post_content: 'WOOOOOO its time to go',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    post_content: 'Feed me french fries and milkshakes',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    post_content: 'there was a shooting star show last night',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    post_content: 'Walk it like I talk it',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_content: 'Dogs are my favorite animal',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_content: 'We should all go to the next football game and tailgate',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    post_content: 'I do not know what else to say',
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    post_content: 'Yo quiero visitar Colombia otro vez',
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_content: 'Pandas look warm and cuddly',
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    post_content: 'Is it summer yet?',
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    post_content: 'When is this class over?',
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    post_content: 'Blue flowers are better than red',
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    post_content: 'HEB is the greatest grocery store in the planet',
    user_id: 3
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    post_content: 'How much more do I need to do?',
    user_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_content: 'Running is a good form of exercise',
    user_id: 6
  },
  {
    title: 'Etiam justo.',
    post_content: 'Driving fastly thru a school zone is a bad idea',
    user_id: 4
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    post_content: 'You should learn how to cook mexican food',
    user_id: 6
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    post_content: 'They want to go dancing on Saturday',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
