import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const recordVideoplayerCurrentTime = function (time) {
  localStorage.setItem('videoplayer-current-time', time.seconds);
};

player.on('timeupdate', throttle(recordVideoplayerCurrentTime, 1000));

const videoplayerCurrentTime = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(videoplayerCurrentTime).catch(function (error) {
  switch (error.name) {
    case 'RangeError':
      break;

    default:
      break;
  }
});
