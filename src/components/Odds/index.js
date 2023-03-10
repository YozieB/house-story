import React from 'react'
import styles from './odds.module.css'

export const Odds = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <h3 className={styles.title}>О компании</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>Основная информация</li>
          <li className={styles.listItem}>История компании</li>
        </ul>
      </div>
      <div className={styles.item}>
        <h3 className={styles.title}>Стройка и ремонт</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>Кейсы наших клиентов</li>
          <li className={styles.listItem}>Услуги которые мы оказываем</li>
          <li className={styles.listItem}>Часто задаваемые вопросы</li>
        </ul>
      </div>
      <div className={styles.item}>
        <h3 className={styles.title}>Покупка недвижимости</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>Кейсы наших клиентов</li>
          <li className={styles.listItem}>Топ 30 вопросов инвесторов</li>
        </ul>
      </div>
      <div className={styles.item}>
        <h3 className={styles.title}>Маркетинговые услуги</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>Кейсы наших клиентов</li>
          <li className={styles.listItem}>Услуги которые мы оказываем</li>
        </ul>
      </div>
    </div>
  )
}
