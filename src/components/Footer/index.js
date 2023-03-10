import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import Select from 'react-select'
import styles from './footer.module.css'
import icon1 from '../../images/footer-icon-1.svg'
import icon2 from '../../images/footer-icon-2.svg'
import icon3 from '../../images/footer-icon-3.svg'
import icon4 from '../../images/footer-icon-4.svg'
import icon5 from '../../images/footer-icon-5.svg'
import icon6 from '../../images/footer-icon-6.svg'
import arrow from '../../images/green-arrow.svg'
import langIcon from '../../images/lang-icon.svg'
import whatsapp from '../../images/whatsapp.svg'
import tg from '../../images/tg.svg'
import insta from '../../images/insta.svg'
import fb from '../../images/fb.svg'
import mail from '../../images/mail.svg'
import 'swiper/css'
import swiperImg1 from '../../images/swiper-1.png'
import swiperImg2 from '../../images/swiper-2.png'
import swiperImg3 from '../../images/swiper-3.png'
import sliderBtn from '../../images/swiper-btn.svg'

const policySelectOptions = [
  {
    value: 'Политика конфиденциальности',
    label: 'Политика конфиденциальности',
  },
  { value: 'Политика номер два', label: 'Политика номер два' },
  { value: 'Политика номер три', label: 'Политика номер три' },
]
const langSelectOptions = [
  {
    value: 'Русский',
    label: (
      <div className={styles.selectLang}>
        <img src={langIcon} height="20px" width="20px" />
        Русский
      </div>
    ),
  },
  {
    value: 'Английский',
    label: (
      <div className={styles.selectLang}>
        <img src={langIcon} height="20px" width="20px" />
        Английский
      </div>
    ),
  },
  {
    value: 'Китайский',
    label: (
      <div className={styles.selectLang}>
        <img src={langIcon} height="20px" width="20px" />
        Китайский
      </div>
    ),
  },
]

export const Footer = () => {
  const [selectedOption, setSelectedOption] = useState(policySelectOptions[0])
  const [langSelectedOption, setLangSelectedOption] = useState(
    langSelectOptions[0]
  )
  return (
    <footer className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.info}>
          <h4 className={styles.title}>Видеоотзывы от партнёров</h4>
          <div className={styles.swiper}>
            <Swiper
              modules={[Pagination]}
              spaceBetween={30}
              slidesPerView={3}
              pagination={{ clickable: true }}
              onSlideChange={() => console.log('slide change')}
              onSwiper={swiper => console.log(swiper)}
              breakpoints={{
                // when window width is >= 640px
                640: {
                  slidesPerView: 3,
                },
                1300: {
                  slidesPerView: 3,
                },
              }}
            >
              <SwiperSlide>
                <div className={styles.slide}>
                  <img src={swiperImg1} alt="Видео" />
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className={styles.playButton}
                    href="https://youtube.com"
                  >
                    <img alt="Играть" src={sliderBtn} />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.slide}>
                  <img src={swiperImg2} alt="Видео" />
                  <a
                    target="_blank"
                    className={styles.playButton}
                    href="https://youtube.com"
                    rel="noreferrer"
                  >
                    <img alt="Играть" src={sliderBtn} />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.slide}>
                  <img src={swiperImg3} alt="Видео" />
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className={styles.playButton}
                    href="https://youtube.com"
                  >
                    <img alt="Играть" src={sliderBtn} />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.slide}>
                  <img src={swiperImg1} alt="Видео" />
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className={styles.playButton}
                    href="https://youtube.com"
                  >
                    <img alt="Играть" src={sliderBtn} />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.slide}>
                  <img src={swiperImg2} alt="Видео" />
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className={styles.playButton}
                    href="https://youtube.com"
                  >
                    <img alt="Играть" src={sliderBtn} />
                  </a>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className={styles.copy}>
            <a href="#" className={styles.copyAcc}>
              Alfa Digital Agency
            </a>{' '}
            – разработка высоко конверсионных сайтов
          </div>
        </div>
        <nav className={styles.item}>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <img src={icon1} alt="Главная" />
              <a href="#" className={styles.listLink}>
                Главная
              </a>
            </li>
            <li className={styles.listItem}>
              <img src={icon2} alt="Каталог готовых объектов" />
              <a href="#" className={styles.listLink}>
                Каталог готовых объектов
              </a>
            </li>
            <li className={styles.listItem}>
              <img src={icon3} alt="Магазин стройматериалов" />
              <a href="#" className={styles.listLink}>
                Магазин стройматериалов
              </a>
            </li>
            <li className={styles.listItem}>
              <img src={icon4} alt="Блог" />
              <a href="#" className={styles.listLink}>
                Блог
              </a>
            </li>
            <li className={styles.listItem}>
              <img src={icon5} alt="Выезд специалиста" />
              <a href="#" className={styles.listLink}>
                Выезд специалиста
              </a>
            </li>
            <li className={styles.listItem}>
              <img src={icon6} alt="Контакты" />
              <a href="#" className={styles.listLink}>
                Контакты
              </a>
            </li>
          </ul>
        </nav>
        <div className={styles.item}>
          <a href="#" className={styles.title}>
            Смотреть все документы
            <img src={arrow} alt="Стрелка" />
          </a>
          <Select
            isSearchable={false}
            classNames={{
              control: state =>
                state.isFocused ? styles.selectActive : styles.select,
              indicatorSeparator: () => styles.selectSeparator,
              singleValue: state =>
                state.isFocused ? styles.selectorValue : styles.selectorValue,
              valueContainer: () => styles.selectorValueContainer,
              dropdownIndicator: state =>
                state.isFocused
                  ? styles.selectorIndicatorContainerActive +
                    ' ' +
                    styles.selectorIndicatorContainer
                  : styles.selectorIndicatorContainer,
              menu: state => styles.selectorMenu,
              option: state =>
                state.isFocused
                  ? styles.selectorOptionActive + ' ' + styles.selectorOption
                  : styles.selectorOption,
            }}
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={policySelectOptions}
          />
          <Select
            isSearchable={false}
            classNames={{
              control: state =>
                state.isFocused ? styles.selectActive : styles.select,
              indicatorSeparator: () => styles.selectSeparator,
              singleValue: state =>
                state.isFocused ? styles.selectorValue : styles.selectorValue,
              valueContainer: () => styles.selectorValueContainer,
              dropdownIndicator: state =>
                state.isFocused
                  ? styles.selectorIndicatorContainerActive +
                    ' ' +
                    styles.selectorIndicatorContainer
                  : styles.selectorIndicatorContainer,
              menu: state => styles.selectorMenu,
              option: state =>
                state.isFocused
                  ? styles.selectorOptionActive + ' ' + styles.selectorOption
                  : styles.selectorOption,
            }}
            defaultValue={langSelectedOption}
            onChange={setLangSelectedOption}
            options={langSelectOptions}
          />
          <div className={styles.social}>
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
        </div>
      </div>
    </footer>
  )
}
