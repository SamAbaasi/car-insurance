export const TRANSLATIONS = {
    signUp: 'ثبت نام',
    firstName: 'نام',
    lastName: 'نام خانوادگی',
    mobile: 'شماره موبایل',
    password: 'رمز عبور'
}
export const SignUpValidations = {
    mobile:  /^(098|0098|98|\+98|0)?9(0[0-5]|[1 3]\d|2[0-3]|9[0-9]|41)\d{7}$/g,
    firstName: /^[ آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی]+$/gum,
    lastName: /^[ آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی]+$/gum,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.{4,10}$)(?=.*\d)/
}