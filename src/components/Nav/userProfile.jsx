import BellIconBtn from './bellIcon';
import ProfileIcon from './profileIcon';

import Auth from '../../utils/auth';

function UserIconAndNotificationBell() {
   const loggedIn = Auth.loggedIn();

    return (
        <>
            {/* If user is logged in, show user icon and bell icon. Otherwise show nothing */}
            {loggedIn ? (
            <div className="hidden lg:block lg:flex lg:items-center">
                <BellIconBtn />
                <ProfileIcon />
            </div>
            ) : null}
        </>
    )
}

export default UserIconAndNotificationBell;
