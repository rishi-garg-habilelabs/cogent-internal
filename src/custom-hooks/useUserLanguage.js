import {useDispatch, useSelector} from "react-redux";
import i18n from '../../src/i18n';
import {updateUser} from "../store/actions/getUser";

/**
 * Hook to set default language of user.
 * this returns language and setter.
 * @returns {{defaultLanguage: (*|string), setUserLanguage: setUserLanguage}}
 */
export default function useUserLanguage(){
    const user = useSelector((state)=>state.user);
    const language = user?.language || 'ar';
    const dispatch = useDispatch();
    //language setter.
    function setUserLanguage(lang = 'en') {
        i18n.changeLanguage(lang);
            localStorage.setItem('langugae', lang);
        
        if ( user?.language !== lang) {
            dispatch(updateUser(user?._id, {language : lang}));
        }
    }
    return {
        language,
        setUserLanguage
    }
}
