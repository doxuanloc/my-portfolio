import { useState } from "react";
import Button from "../../Components/Button";
// import Carousel from "../../Components/Carousel";
import Mail from "../../Components/Mail";
import Map from "../../Components/Map";
import Skills from "../../Components/Skills";
import styles from "./index.module.scss";

const DATA = [
  {
    id: 1,
    time: "July 2022 - Present",
    tech: "ReactJs",
    name: "PolkaDot",
    url: "https://github.com/doxuanloc/webPolkadotCloneReactJs",
    nameProject: "Clone UI PolkaDot",
    content1:
      "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, React",
    content2:
      "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, React",
    content3:
      "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, React",
  },
  {
    id: 2,
    time: "April 2022 - Present",
    tech: "WordPress",
    name: "GenCapital",
    url: "https://gencapital.io/",
    nameProject: "GenCapital",
    content1:
      "Work with a variety of different languaand content management systems such as JavaScript, React",
    content2:
      "Work with a variety of different languages, platforms, frameworks, a systems such as JavaScript, React",
    content3:
      "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, React",
  },
  {
    id: 3,
    time: "August 2021 - Jan 2022",
    tech: "ReactJs, NodeJs",
    name: "Shop GPS Pet",
    url: "https://pet-shop-fe.vercel.app/",
    nameProject: "SHOP GPS PET",
    content1:
      "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, React",
    content2:
      "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, React",
    content3:
      "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, React",
  },
  {
    id: 4,
    time: "April 2022 - May 2022",
    tech: "Symfony PHP",
    name: "Buy Honda",
    url: "https://polkadot.network/",
    nameProject: "Buy Honda",
    content1:
      "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, React",
    content2:
      "Work with a variety of different languagest languagest languagest languagest languages, platforms, frameworks, and content management systems such as JavaScript, React",
    content3:
      "Work with a variety of different languages, platforms, frameworks,ent languages, platformsent languages, platforms and content management systems such as JavaScript, React",
  },
  {
    id: 5,
    time: "May 2022 - Present",
    tech: "ReactJs, NodeJs",
    name: "TikTok",
    url: "https://github.com/doxuanloc/webPolkadotCloneReactJs",
    nameProject: "Clone UI TikTok",
    content1:
      "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, React",
    content2:
      "Work with a variety of different languages, plety of different langatforms, frameworks, and content management systems such as JavaScript, React",
    content3:
      "Work with a variety of different languagety of different langety of different langes, platforms, frameworks, and content management systems such as JavaScript, React",
  },
  {
    id: 6,
    time: "May 2018 - Present",
    tech: "ReactJs",
    name: "PolkaDot",
    url: "https://polkadot.network/",
    git: "https://github.com/doxuanloc/webPolkadotCloneReactJs",
    nameProject: " Clone UI PolkaDot",
    content1:
      "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, React",
    content2:
      "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, React",
    content3:
      "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, React",
  },
];

const DATA_SKILLS = [
  { id: 1, title: "LANGUAGE", name: ["JavaScript", "C#", "PHP"] },
  { id: 2, title: "FRAMEWORK", name: ["React", "Symfony", ".NET"] },
  { id: 3, title: "DATABASE", name: ["MySQL", "MongoDB", "SQL"] },
  { id: 4, title: "GIT", name: ["Github", "Gitlab", "PHP"] },
];

function Body() {
  const toProject = () => {
    window.open("https://pet-shop-fe.vercel.app/");
  };

  const [currentTab, setCurrentTab] = useState(DATA[0].id);
  const [showInfoMe, setShowInfoMe] = useState(false);
  const [opacity, setOpacity] = useState(DATA_SKILLS[0].id);

  const handleShowInfoMe = () => {
    setShowInfoMe(!showInfoMe);
  };

  const handleOpacity = (item) => {
    setOpacity(item.id);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <h2>Hi, my name is</h2>
        <h1>Do Xuan Loc.</h1>
        <h3>I build things for the web and love blockchain.</h3>
        <p>
          I'm a fontend and backend website developer. Researching on blockchain
          and blockchain ecosystems.
        </p>
        <div>
          <Button>
            <h4>View a website</h4>
          </Button>
          <div>{/* <Carousel /> */}</div>
        </div>
      </div>
      <div className={styles.about} id="about">
        <div className={styles["title-about"]}>
          <h1>
            <span style={{ color: "var(--blue)" }}>01. </span>
            About Me
          </h1>
        </div>
        <div className={styles.content}>
          <div className={styles["content-about"]}>
            <div>
              <p>
                Hello! My name is Do Xuan Loc. I studied for 2 year at the
                University of Information Technology (UIT) and I am currently
                studying in the final year of FPT BTEC College. I have the
                desire to become a back-end & front‑end developer, I am
                passionate about building excellent website that improves the
                lives of those around me.
              </p>
              <p>
                I am learning and deep learning about blockchain and love it
                very much
              </p>
              <p>
                I also recently launched a course that covers everything you
                need to build a web app with the{" "}
                <span onClick={toProject} className={styles.span}>
                  GPS Pet Shop
                </span>{" "}
                API using Node & React. Here are a few technologies I’ve been
                working with recently:
              </p>
              <p>Lorem......</p>
            </div>
            <img
              src="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/2/28/1018683/Rose_Blackpink_Vogue.jpg"
              alt="s"
            ></img>
          </div>
          <div className={styles.skills}>
            {DATA_SKILLS.map((item) => (
              <Skills
                onClick={() => handleOpacity(item)}
                key={item.id}
                id={item.id}
                title={item.title}
                name={[...item.name]}
                isOpacity={opacity === item.id}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.experience} id="experience">
        <div className={styles["title-experience"]}>
          <h1>
            <span style={{ color: "var(--blue)" }}>02. </span>
            My Project
          </h1>
        </div>
        <div className={styles["content-experience"]}>
          <div>
            {DATA?.map((item) => (
              <button
                className={
                  item.id === currentTab
                    ? styles["active-btn"]
                    : styles["non-active-btn"]
                }
                key={item.id}
                onClick={() => setCurrentTab(item.id)}
              >
                <span>{item.nameProject}</span>
              </button>
            ))}
          </div>
          <div className={styles.detail}>
            <p>
              {DATA[currentTab - 1]?.tech}
              <span>
                {" "}
                <a
                  target="blank"
                  style={{ color: "var(--blue", fontSize: 24 }}
                  href={DATA[currentTab - 1]?.url}
                >{`@${DATA[currentTab - 1]?.nameProject}`}</a>
              </span>
            </p>

            <h2 style={{ color: "var(--slate)", fontWeight: "200" }}>
              {DATA[currentTab - 1]?.time}
            </h2>
            <ul
              style={{
                color: "var(--slate)",
                fontSize: 14,
                letterSpacing: 1.2,
              }}
            >
              <h4>{DATA[currentTab - 1]?.content1}</h4>
              <h4>{DATA[currentTab - 1]?.content2}</h4>
              <h4>{DATA[currentTab - 1]?.content3}</h4>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.work} id="work">
        <div className={styles["title-work"]}>
          <h1>
            <span style={{ color: "var(--blue)" }}>03. </span>
            Some Things I’ve Built
          </h1>
        </div>
        <div className={styles["content-work"]}>
          <h1>- Build Web Buy Honda</h1>
          <div>
            <img
              src="https://img.vn/uploads/version/img24-png-20190726133727cbvncjKzsQ.png"
              alt=""
            />
          </div>
          <h1>Future.......</h1>
          <h1>Future.......</h1>
          <h1>Future.......</h1>
          <h1>Future.......</h1>
          <h1>Future.......</h1>
          <h1>Future.......</h1>
          <h1>Future.......</h1>
          <h1>Future.......</h1>
        </div>
        <div className={styles["content-work"]}> </div>
      </div>
      <div className={styles.contact} id="contact">
        <div className={styles["title-contact"]}>
          <h1>
            <span style={{ color: "var(--blue)" }}>04. </span>
            What’s Next?
          </h1>
        </div>
        <div
          style={{ textAlign: "center" }}
          className={styles["content-contact"]}
        >
          <h3>
            Although I’m not currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I’ll try my best to get back to you!
          </h3>
          <Button onClick={handleShowInfoMe}>Contact Me</Button>
        </div>
        {showInfoMe && (
          <div className={styles.infoMe}>
            <Mail />
            <Map />
          </div>
        )}
      </div>
    </div>
  );
}

export default Body;
