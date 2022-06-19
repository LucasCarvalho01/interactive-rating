const vote = localStorage.getItem('vote');

const voteInfo = document.querySelector('.voted');
voteInfo.innerText = 'You selected ' + vote + ' out of 5';