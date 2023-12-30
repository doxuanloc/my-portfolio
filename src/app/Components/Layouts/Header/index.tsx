/* eslint-disable jsx-a11y/anchor-has-content */
import styles from "./index.module.scss";
import image from "../../assets/images/logo.png";

export default  function Header({ showNav: any }) {
  const toCv = () => {
    window.open(
      "https://drive.google.com/file/d/1F9GhOlqtkLRNxqht_DCb3frKfhsZKFvu/view?usp=sharing"
    );
  };

  return (
    <main>
      <div className={styles.social}>
        <a href="https://github.com/doxuanloc" target="blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.instagram.com/doxuanloc2k" target="blank">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://twitter.com/DoxuanlocJB" target="blank">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          href="https://www.linkedin.com/in/%C4%91%C3%B4%CC%83-l%E1%BB%99c-278121245/"
          target="blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://www.hackerrank.com/locvkv1234" target="blank">
          <FontAwesomeIcon icon={faHackerrank} />
        </a>
      </div>

      <div
        className={
          showNav ? styles["wrapper-header"] : styles["wrapper-header-hide"]
        }>
        <Image src={image} alt="logo" width={30} heigh={100} />
        <nav className={styles.nav}>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={600}>
            <span>01. </span>About
          </Link>
          <Link
            activeClass="active"
            to="experience"
            spy={true}
            smooth={true}
            offset={-100}
            duration={600}>
            <span>02. </span>Experience
          </Link>
          <Link
            activeClass="active"
            to="work"
            spy={true}
            smooth={true}
            offset={-100}
            duration={600}>
            <span>03. </span>Work
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={600}>
            <span>04. </span>Contact
          </Link>
          <>
            <Button onClick={toCv}>
              <p>Resume</p>
            </Button>
          </>
        </nav>
      </div>
      <div className={styles.gmail}>
        <h4>locvkv1234@gmail.com</h4>
      </div>
    </main>
  );
}
