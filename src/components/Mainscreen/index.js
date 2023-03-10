import React, { useState } from 'react'
import styles from './mainscreen.module.css'
import img from '../../images/person.png'
import fireImage from '../../images/fire.png'
import submitBtn from '../../images/submit-btn.svg'
import arrow from '../../images/box-arrow.svg'
import whatsapp from '../../images/whatsapp.svg'
import tg from '../../images/tg.svg'
import insta from '../../images/insta.svg'
import fb from '../../images/fb.svg'
import mail from '../../images/mail.svg'

export const Mainscreen = () => {
  const [boxOpened, setBoxOpened] = useState(false)
  return (
    <div className={styles.wrapper}>
      <div
        className={boxOpened ? styles.boxActive + ' ' + styles.box : styles.box}
      >
        <button
          onClick={() => setBoxOpened(!boxOpened)}
          className={
            boxOpened ? styles.arrowActive + ' ' + styles.arrow : styles.arrow
          }
        ></button>
        <a href="#">
          <img src={mail} alt="Email" />
        </a>
        <a href="#">
          <img src={whatsapp} alt="WhatsApp" />
        </a>
        <a href="#">
          <img src={tg} alt="Telegram" />
        </a>
        <a href="#">
          <img src={insta} alt="Instagram" />
        </a>
        <a href="#">
          <img src={fb} alt="FaceBook" />
        </a>
      </div>
      <div className={styles.info}>
        <h1 className={styles.title}>
          Все материалы о нашей компании и услугах которые мы оказываем
        </h1>
        <p className={styles.text}>
          Здесь вы найдете ответы на самые распространенные вопросы, инструкции
          и кейсы наших клиентов
        </p>
        <div className={styles.article}>
          <div className={styles.articleInfo}>
            <p className={styles.articleText}>
              <span className={styles.articleAccent}>
                Хотите с нами связаться
              </span>
              , оставьте заявку и специалист свяжется с вами в течение 30 минут.
            </p>
            <img src={fireImage} alt="Огонь" />
          </div>
          <form className={styles.form}>
            <label className={styles.formField}>
              <input type="number" placeholder=" " className={styles.input} />
              <div className={styles.placeholder}>Номер телефона</div>
            </label>
            <button className={styles.button} type="submit">
              Оставить заявку <img src={submitBtn} alt="Отправить" />
            </button>
          </form>
        </div>
      </div>
      <img className={styles.image} src={img} alt="Человек" />
    </div>
  )
}
