
import styles from '../ui/profile.module.css';
import {terminator} from '../ui/fonts';

const ProfileHeader = ({ username,plan,email,credits }) => {
    return (
      <div className={styles.profile_header} style={{ backgroundImage: `url('/images/background.png')` }}>
        <div className={styles.logo}><h1 className={`${terminator.className}`}>LOVERSE</h1></div>
        <div className={`${styles.profile_flex} max-w-7xl`}>
            
            <div className={styles.profile_info}>
                <div className={styles.profile_image}>
                    <img src="/images/profile.png" alt="Profile" />
                </div>
                <div className={styles.profile_details}>
                    <h1 className='text-3xl text-white'>{username}</h1>
                    <div><span className='text-white text-opacity-50'>Plan: </span><span className='text-white'>{plan}</span></div>
                    <div><span className='text-white text-opacity-50'>Email: </span> <span className='text-white'>{email}</span></div>
                    <div className='flex items-center mt-2 justify-center lg:justify-start'><span className='text-white mr-2 '>Credits</span><div className={styles.credits_container}>{credits}</div></div>
                </div>
            </div>
            <div>
                <div className='text-xl lg:text-right'>
                <span className='text-white text-opacity-50'>Account setting</span>
                <button className={`${styles.account_btn} ${styles.delete_btn}`}>Delete Account</button>
                <button className={`${styles.account_btn} ${styles.change_btn}`}>Change Email/Password</button>
                </div>
            </div>
        </div>
      </div>
    );
  };
  
  export default ProfileHeader;