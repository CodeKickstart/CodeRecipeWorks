import { useState, useEffect } from 'react';

import classes from './about-comp.module.css';

function About() {

  return (
    <section className={classes.about}>
      <h1>About</h1>
      <p> by {{person}} </p>
      <p> blah blah blah ... </p>
    </section>
  );
}

export default About;
