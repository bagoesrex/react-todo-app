import style from './Alert.module.css'

export default function Alert({ children, onClear }) {
    return <div className={style.Alert}>
        {children}
        <span onClick={onClear}>x</span>
    </div>
}