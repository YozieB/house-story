import React, { useState } from 'react'
import styles from './header.module.css'
import logo from '../../images/logo.svg'
import phone from '../../images/phone.svg'
import whatsapp from '../../images/whatsapp.svg'
import tg from '../../images/tg.svg'
import insta from '../../images/insta.svg'
import fb from '../../images/fb.svg'
import mail from '../../images/mail.svg'

export const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false)
  return (
    <header className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <a href="#" className={styles.logoLink}>
            <img className={styles.logoImage} src={logo} alt="Лого" />
          </a>
          <div className={styles.info}>
            <a className={styles.infoLink} href="tel:+34624362326">
              <img src={phone} alt="Телефон" />
              +34 624 36 23 26
            </a>
            <p className={styles.infoText}>
              <span className={styles.infoCircle}></span>
              Звоните, мы онлайн
            </p>
          </div>
          <div className={styles.info + ' ' + styles.infoLinks}>
            <div className={styles.infoSocial}>
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
              <a href="#">
                <img src={mail} alt="Email" />
              </a>
            </div>
            <p className={styles.infoText}>
              <span className={styles.infoCircle}></span>
              Пишите, мы онлайн
            </p>
          </div>
          <button className={styles.button}>Записаться на экскурсию</button>
          <div className={styles.burger}>
            <span className={styles.burgerLine}></span>
            <span className={styles.burgerLine}></span>
            <span className={styles.burgerLine}></span>
          </div>
          <div
            className={styles.burger + ' ' + styles.burgerMobile}
            onClick={() => setMenuOpened(!menuOpened)}
          >
            <span className={styles.burgerLine}></span>
            <span className={styles.burgerLine}></span>
            <span className={styles.burgerLine}></span>
          </div>
        </div>
        <nav className={styles.menu}>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <a className={styles.listItemLink} href="#">
                Выполненные работы
              </a>
            </li>
            <li className={styles.listItem}>
              <a className={styles.listItemLink} href="#">
                Каталог готовых объектов
              </a>
            </li>
            <li className={styles.listItem}>
              <a className={styles.listItemLink} href="#">
                Магазин стройматериалов
              </a>
            </li>
            <li className={styles.listItem}>
              <a className={styles.listItemLink} href="#">
                Блог
              </a>
            </li>
            <li className={styles.listItem}>
              <a className={styles.listItemLink} href="#">
                О нас
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div
        className={
          menuOpened
            ? styles.mobileMenu + ' ' + styles.mobileMenuActive
            : styles.mobileMenu
        }
        onClick={() => setMenuOpened(false)}
      >
        <div
          className={styles.mobileMenuInner}
          onClick={e => e.stopPropagation()}
        >
          <button className={styles.button + ' ' + styles.buttonMobile}>
            Записаться на экскурсию
          </button>
          <nav className={styles.menu + ' ' + styles.menuMobile}>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <a className={styles.listItemLink} href="#">
                  Выполненные работы
                </a>
              </li>
              <li className={styles.listItem}>
                <a className={styles.listItemLink} href="#">
                  Каталог готовых объектов
                </a>
              </li>
              <li className={styles.listItem}>
                <a className={styles.listItemLink} href="#">
                  Магазин стройматериалов
                </a>
              </li>
              <li className={styles.listItem}>
                <a className={styles.listItemLink} href="#">
                  Блог
                </a>
              </li>
              <li className={styles.listItem}>
                <a className={styles.listItemLink} href="#">
                  О нас
                </a>
              </li>
            </ul>
          </nav>
          <div className={styles.info + ' ' + styles.infoMobile}>
            <div className={styles.infoSocial}>
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
              <a href="#">
                <img src={mail} alt="Email" />
              </a>
            </div>
            <p className={styles.infoText}>
              <span className={styles.infoCircle}></span>
              Пишите, мы онлайн
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
