import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/me_icon.jpeg`} alt="" />
      </Link>
      <header>
        <h2>Ntsika Mark Mngoma</h2>
        <p><a href="mailto:mark@mergemedia.co.za">mark@mergemedia.co.za</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, Ntsika Mark Mngoma. I like building things.
            I am a <a href="https://merge.africa/">Merge•Africa</a> software engineer, and
            the co-founder and CTO.
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== `${BASE_PATH}/resume` ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map(s => (
          <li key={s.label}><a href={s.link}><FontAwesomeIcon icon={s.icon} /></a></li>
        ))}
      </ul>
      <p className="copyright">&copy; Ntsika Mark Mngoma <Link to="/">markmngoma.info</Link>.</p>
    </section>
  </section>
);

export default Nav;
