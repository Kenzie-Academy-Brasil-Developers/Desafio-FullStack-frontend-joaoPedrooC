import { ForwardedRef, forwardRef } from "react"
import styles from './style.module.scss';
import { FieldError } from "react-hook-form";

interface IInputProps {
  type: string
  placeholder: string
  errors?: FieldError
  id?: string
}

export const Input = forwardRef(({ type, placeholder, errors, id, ...rest }: IInputProps, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <div className={styles.input__container}>
      <input className={`${styles.input} font__inter--input`} type={type} id={id} placeholder={placeholder} {...rest} ref={ref} />
      { errors ? <span className="error__message">{errors.message}</span> : null }
    </div>
  )
})