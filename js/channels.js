// channels.js

document.addEventListener('DOMContentLoaded', () => {
  const addChannelButton = document.getElementById('add-channel');
  const channelNameInput = document.getElementById('new-channel-name');
  const channelsList = document.getElementById('channels-list');

  addChannelButton.addEventListener('click', () => {
    const channelName = channelNameInput.value.trim();

    if (channelName) {
      const channelItem = document.createElement('li');
      channelItem.classList.add('channel-item');
      channelItem.textContent = channelName;

      // Создаем возможность для отправки сообщений в канал
      const postInput = document.createElement('textarea');
      postInput.placeholder = 'Напишите сообщение для этого канала...';
      channelItem.appendChild(postInput);

      const sendPostButton = document.createElement('button');
      sendPostButton.textContent = 'Отправить пост';
      channelItem.appendChild(sendPostButton);

      // Функциональность отправки поста
      sendPostButton.addEventListener('click', () => {
        const postContent = postInput.value.trim();
        if (postContent) {
          const post = document.createElement('div');
          post.classList.add('channel-post');
          post.textContent = postContent;
          channelItem.appendChild(post);
          postInput.value = ''; // Очистить поле ввода
        } else {
          alert('Пожалуйста, введите сообщение.');
        }
      });

      channelsList.appendChild(channelItem);
      channelNameInput.value = ''; // Очистить поле ввода
    } else {
      alert('Пожалуйста, введите имя канала.');
    }
  });
});
