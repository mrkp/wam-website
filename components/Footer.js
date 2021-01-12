import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="/Google_Play_Store_badge_EN.svg" alt="Netlify Logo" className={styles.logo} />
        <img src="/Download_on_the_App_Store_Badge.svg" alt="Netlify Logo" className={styles.logo} />
      </footer>
    </>
  )
}
