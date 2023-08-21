import Button from "../../components/Button"
import { SignUpValidations, TRANSLATIONS } from "./constants"
import { useForm } from "react-hook-form";
import './signUp.css'
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
type FormValues = {
  firstName: string;
  lastName: string;
  mobile: string;
  password: string;
}
export const Signup = () => {
  const { login, isAuthenticated } = useAuth();
  const form = useForm<FormValues>({mode: "all"})
  const navigate = useNavigate()
  const {register, formState, handleSubmit} = form;
  const {errors} = formState;
  function onsubmit(data: FormValues) {
    const {firstName, lastName, mobile, password} = data;
    login(
      firstName,
      mobile,
      lastName,
      password
    );
  }
  useEffect(() => {
    if(isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated, navigate])
  return (
    <div className="signup">
        <h1 className="title">{TRANSLATIONS.signUp}</h1>
        <form onSubmit={handleSubmit(onsubmit)}>
            <input {...register('firstName', {
              required: {
                value: true,
                message: 'وارد کردن این فیلد الزامی است.'
              },
              pattern: {
                value: SignUpValidations.firstName,
                message: '.فقط حروف فارسی وارد کنید'
              }
            })} 
            className="form-input" placeholder={TRANSLATIONS.firstName} />
            <p className="error-message">{errors.firstName?.message}</p>
            <input
            {...register('lastName', {
              required: {
                value: true,
                message: 'وارد کردن این فیلد الزامی است.'
              },
              pattern: {
                value: SignUpValidations.lastName,
                message: '.فقط حروف فارسی وارد کنید'
              }
            })} 
            className="form-input" placeholder={TRANSLATIONS.lastName} />
            <p className="error-message">{errors.lastName?.message}</p>
            <input {...register('mobile', {
              required: {
                value: true,
                message: 'وارد کردن این فیلد الزامی است.'
              },
              pattern: {
                value: SignUpValidations.mobile,
                message: 'شماره موبایل باید با فرمت درست وارد شود.'
              }
            })}  
            className="form-input" placeholder={TRANSLATIONS.mobile} />
            <p className="error-message">{errors.mobile?.message}</p>
            <input {...register('password', {
              required: {
                value: true,
                message: 'وارد کردن این فیلد الزامی است.'
              },
              pattern: {
                value: SignUpValidations.password,
                message: `رمز عبور از حداقل یک عدد حداقل یک حرف لاتین بزرگ و حداقل یک حرف لاتین کوچک تشکیل شده
                باشد و طول آن حداقل ۴ و حداکثر ١٠ کاراکتر باشد.
                `
              }
            })}  
            className="form-input" placeholder={TRANSLATIONS.password} />
          <p className="error-message big-message">{errors.password?.message}</p>
          <div className="btn-container">
            <Button type="filled" title={TRANSLATIONS.signUp} />
        </div>
        </form>
    </div>
  )
}
