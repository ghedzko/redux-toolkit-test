import { Component } from 'react';
import styles from './Card.module.scss';
interface CardProps {
  children: JSX.Element;
}

function Card(): JSX.Element {
  return <div className={styles.wrapper}></div>;
}

export default Card;
