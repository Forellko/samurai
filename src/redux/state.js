const personsData = [
  { id: '1', name: '1a' },
  { id: '2', name: '2b' },
  { id: '3', name: '3c' },
];

const messagesData = [
  { id: '1', message: 'text1', side: 'left' },
  { id: '2', message: 'text2', side: 'right' },
  { id: '3', message: 'text3', side: 'left' },
];

const postsData = [
  { id: '1', text: 'post1', likes: '2' },
  { id: '2', text: 'post2', likes: '1' },
  { id: '3', text: 'post3', likes: '3' },
];

const state = {
  dialogPage: {
    personsData,
    messagesData,
  },
  profilePage: {
    postsData,
  },
};

export default state;
