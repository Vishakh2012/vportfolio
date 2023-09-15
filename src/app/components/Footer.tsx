const Footer:React.FunctionComponent = () => {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content w-screen">
      <nav>
        <header className="footer-title">Blogs</header>
        <a className="link link-hover" href="https://medium.com/p/16aacb4f373b">docker application on aws</a>
        <a className="link link-hover" href="https://medium.com/p/2914355bddbb">finetuning hugging-face</a>
      </nav>
      <nav>
        <header className="footer-title">Projects</header>
        <a className="link link-hover" href="https://github.com/Vishakh2012/finetuning">Sarcasm Predictor</a>
        <a className="link link-hover" href="https://github.com/Vishakh2012/song_lyric_generator">Song Generator</a>
        <a className="link link-hover" href="https://github.com/Vishakh2012/whosthedog">Who is the dog</a>
      </nav>
      <nav>
        <header className="footer-title">Contacts</header>
        <a className="link link-hover" href="https://github.com/Vishakh2012">
          GitHub
        </a>
        <a
          className="link link-hover"
          href="https://www.instagram.com/vishakh_pro/"
        >
          Instagram
        </a>
        <a
          className="link link-hover"
          href="https://www.linkedin.com/in/vishakhprakash/"
        >
          Linkedin
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
