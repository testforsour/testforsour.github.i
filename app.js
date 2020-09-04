var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 75,
  autoStart: true,
  cursor: '█',
  strings: ['My name is Tiffany, and I am a frontend dev and wannabe hacker.']
});

typewriter
  .deleteAll(1)
  .pauseFor(50)
  .deleteAll(1)
  .typeString('I work for <strong>[REDACTED]</strong> as a frontend dev, and I code, write, and shoot and edit videos on weekends.')
  .pauseFor(300)
  .deleteAll(1)
  .typeString('Find me online: <br />')
  .pauseFor(300)
  .typeString('<a href="https://tiffanywhite.dev">Blog</a> <br />')
  .typeString('<a href="https://www.tiffanyrwhite.com">Portfolio</a> <br />')
