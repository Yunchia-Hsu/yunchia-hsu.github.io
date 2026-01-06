import React from "react";
import "./About.css";
import profilePic from "../assets/selphie.png";

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="about-tect">
          <h2>Hello! I'm Yun-Chia Hsu </h2>
          <p>
            Software Engineer with a passion for creating AI integrated
            full-stack solutions.
          </p>
          <p>
            I love exploring new technologies. Other than that I'm either
            drinking coffee or doing bouldering.
            <br />
            Ice skating is my NEW winter hobby.
          </p>
        </div>
        <div className="about-image">
          <img src={profilePic} alt="Profile Picture" />
          <div className="links-container ">
            <a href="https://github.com/Yunchia-Hsu" target="_blank">
              <img
                className="links-img"
                src="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2020%2020'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3ctitle%3egithub%20[%23142]%3c/title%3e%3cdesc%3eCreated%20with%20Sketch.%3c/desc%3e%3cdefs%3e%3c/defs%3e%3cg%20id='Page-1'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%3e%3cg%20id='Dribbble-Light-Preview'%20transform='translate(-140.000000,%20-7559.000000)'%20fill='%23000000'%3e%3cg%20id='icons'%20transform='translate(56.000000,%20160.000000)'%3e%3cpath%20d='M94,7399%20C99.523,7399%20104,7403.59%20104,7409.253%20C104,7413.782%20101.138,7417.624%2097.167,7418.981%20C96.66,7419.082%2096.48,7418.762%2096.48,7418.489%20C96.48,7418.151%2096.492,7417.047%2096.492,7415.675%20C96.492,7414.719%2096.172,7414.095%2095.813,7413.777%20C98.04,7413.523%20100.38,7412.656%20100.38,7408.718%20C100.38,7407.598%2099.992,7406.684%2099.35,7405.966%20C99.454,7405.707%2099.797,7404.664%2099.252,7403.252%20C99.252,7403.252%2098.414,7402.977%2096.505,7404.303%20C95.706,7404.076%2094.85,7403.962%2094,7403.958%20C93.15,7403.962%2092.295,7404.076%2091.497,7404.303%20C89.586,7402.977%2088.746,7403.252%2088.746,7403.252%20C88.203,7404.664%2088.546,7405.707%2088.649,7405.966%20C88.01,7406.684%2087.619,7407.598%2087.619,7408.718%20C87.619,7412.646%2089.954,7413.526%2092.175,7413.785%20C91.889,7414.041%2091.63,7414.493%2091.54,7415.156%20C90.97,7415.418%2089.522,7415.871%2088.63,7414.304%20C88.63,7414.304%2088.101,7413.319%2087.097,7413.247%20C87.097,7413.247%2086.122,7413.234%2087.029,7413.87%20C87.029,7413.87%2087.684,7414.185%2088.139,7415.37%20C88.139,7415.37%2088.726,7417.2%2091.508,7416.58%20C91.513,7417.437%2091.522,7418.245%2091.522,7418.489%20C91.522,7418.76%2091.338,7419.077%2090.839,7418.982%20C86.865,7417.627%2084,7413.783%2084,7409.253%20C84,7403.59%2088.478,7399%2094,7399'%20id='github-[%23142]'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e"
                alt="github icon"
              />
            </a>

            <a
              href="www.linkedin.com/in/yun-chia-hsu-b95406138"
              target="_blank"
            >
              <img
                className="links-img"
                src="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%20256%20256'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20fill='none'%3e%3cpath%20d='M0%2018.338C0%208.216%208.474%200%2018.92%200h218.16C247.53%200%20256%208.216%20256%2018.338v219.327C256%20247.79%20247.53%20256%20237.08%20256H18.92C8.475%20256%200%20247.791%200%20237.668V18.335z'%20fill='%23069'/%3e%3cpath%20d='M77.796%20214.238V98.986H39.488v115.252H77.8zM58.65%2083.253c13.356%200%2021.671-8.85%2021.671-19.91-.25-11.312-8.315-19.915-21.417-19.915-13.111%200-21.674%208.603-21.674%2019.914%200%2011.06%208.312%2019.91%2021.169%2019.91h.248zM99%20214.238h38.305v-64.355c0-3.44.25-6.889%201.262-9.346%202.768-6.885%209.071-14.012%2019.656-14.012%2013.858%200%2019.405%2010.568%2019.405%2026.063v61.65h38.304v-66.082c0-35.399-18.896-51.872-44.099-51.872-20.663%200-29.738%2011.549-34.78%2019.415h.255V98.99H99.002c.5%2010.812-.003%20115.252-.003%20115.252z'%20fill='%23ffffff'/%3e%3c/g%3e%3c/svg%3e"
                alt="LinkedIn icon"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
