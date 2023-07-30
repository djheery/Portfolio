import { BackgroundColorOptions, TextColorOptions } from '@/app/models/global-types';
import Link from '@/node_modules/next/link';
import React from 'react';
import styles from './LinkButton.module.css';

const outerClasses = `
  ${styles["link-button"]}
  ${BackgroundColorOptions.WHITE_ACCENT}
`

export interface LinkButtonProps {
  url: string,
  text: string,
}

/**
 * The functional component for the LinkButton
 *
 * @param myParam your params here
*/

const LinkButton: React.FC<LinkButtonProps> = (props) => {
  return (
    <Link href={props.url}>
      <div className={outerClasses}>
        <div className={styles["link-button__inner"]}>
            <span className={TextColorOptions.PRIMARY_BLUE}>
              {props.text}
            </span>
        </div>
      </div>
    </Link>
  )
}

export default LinkButton;