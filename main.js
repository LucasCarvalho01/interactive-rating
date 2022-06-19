const options = document.querySelectorAll('[data-rate="option"]');
console.log(options);

options.forEach((item) => {
  item.addEventListener('click', handleClick);
})

function handleClick(event) {
  options.forEach((item) => {
    item.classList.remove('active');
    localStorage.removeItem('vote');
  });
  const vote = event.target.getAttribute('id').slice(-1);
  console.log(vote);
  localStorage.vote = vote;
  event.target.classList.toggle('active');
}