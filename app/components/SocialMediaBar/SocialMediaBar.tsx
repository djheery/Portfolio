import styles from './SocialMediaBar.module.css';

/**
 * The functional component for the SocialMediaBar
*/

const SocialMediaBar: React.FC = () => {
  const outerClasses = `
    ${styles["social-media-bar"]}
  `

  const innerClasses = `
    pos-r ${styles["social-media-bar__inner"]}
  `

  return (
    <div className={outerClasses}>
      <div className={innerClasses}>
        <div className={styles["social-media-bar__icon-container"]}>
          <div className={styles["temp-smb-icon"]}></div>
          <div className={styles["temp-smb-icon"]}></div>
          <div className={styles["temp-smb-icon"]}></div>
        </div>
        <div className={styles["social-media-bar__decorative-line"]}></div>
      </div>
    </div>
  )
}

export default SocialMediaBar;