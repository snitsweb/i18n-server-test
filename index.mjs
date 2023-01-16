import i18next from "i18next";
import frontLangs from './langs/front/index.mjs'
import adminLangs from './langs/admin/index.mjs'

i18next.init({
    lng: 'pl',
    debug: true,
    resources: {
        pl: {
            translation: {
                front: JSON.stringify(frontLangs.pl),
                admin: JSON.stringify(adminLangs.pl)
            }
        }
    }
})


console.log(i18next.t('front'))
console.log(i18next.t('admin'))