import React from 'react';
import {
  FacebookShareButton, FacebookIcon,
  EmailShareButton, EmailIcon,
  PinterestShareButton, PinterestIcon,
  TwitterShareButton, TwitterIcon,
  LinkedinShareButton, LinkedinIcon,
} from 'react-share';

import styles from './styles.css';

export default function SocialSharingButtons() {
  return (
    <div>
      <h1>Social Share</h1>
      <ul className={styles.icon}>
        <li className={styles.li}>
          <FacebookShareButton
            url="https://www.zwilling.com/us/zwilling-enfinigy-power-blender-53100-000/53100-000-0.html"
            quote="I got a sick blender"
            hashtag="#unzwilling"
          >
            <FacebookIcon size={20} round />
          </FacebookShareButton>
        </li>
        <li className={styles.li}>
          <EmailShareButton
            url="https://www.zwilling.com/us/zwilling-enfinigy-power-blender-53100-000/53100-000-0.html"
            subject="Give me this for my christmas present"
            hashtag="#unzwilling"
          >
            <EmailIcon size={20} round />
          </EmailShareButton>
        </li>
        <li className={styles.li}>
          <PinterestShareButton
            url="https://www.zwilling.com/us/zwilling-enfinigy-power-blender-53100-000/53100-000-0.html"
            description="I will marry you if you get me this blender"
            media="https://www.zwilling.com/dw/image/v2/BCGV_PRD/on/demandware.static/-/Sites-zwilling-master-catalog/default/dwed8894b8/images/large/530000000_1.jpg?sw=1350"
          >
            <PinterestIcon size={20} round />
          </PinterestShareButton>
        </li>
        <li className={styles.li}>
          <TwitterShareButton
            url="https://www.zwilling.com/us/zwilling-enfinigy-power-blender-53100-000/53100-000-0.html"
            title="If you want to blend in, get this blender"
            hashtag="#unzwilling"
          >
            <TwitterIcon size={20} round />
          </TwitterShareButton>
        </li>
        <li className={styles.li}>
          <LinkedinShareButton
            url="https://www.zwilling.com/us/zwilling-enfinigy-power-blender-53100-000/53100-000-0.html"
            title="I am looking for a job to buy this blender"
            hashtag="#unzwilling"
          >
            <LinkedinIcon size={20} round />
          </LinkedinShareButton>
        </li>
      </ul>
    </div>
  );
}
