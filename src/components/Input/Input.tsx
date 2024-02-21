import { ForwardedRef, forwardRef } from "react"
import styles from './style.module.scss';

interface IInputProps {
  type: string
  placeholder: string
}

export const Input = forwardRef(({ type, placeholder, ...rest }: IInputProps, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <input className={`${styles.input} font__inter--input`} type={type} placeholder={placeholder} {...rest} ref={ref} />
  )
})