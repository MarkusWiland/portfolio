import container from '../styles/Container.module.css'
export default function Container({children}) {
    return (
        <div className={container.container}>
            {children}
        </div>
    )
}
