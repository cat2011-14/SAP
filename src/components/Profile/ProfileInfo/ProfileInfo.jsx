import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return(
      <div >
      <div>
        <img src='https://img2.goodfon.ru/original/2048x1365/2/92/priroda-nebo-oblaka-ozero.jpg'/>
      </div>
      <div className={s.description}>
        ava + description
      </div>
      
    </div>
      
    );
}

export default ProfileInfo;