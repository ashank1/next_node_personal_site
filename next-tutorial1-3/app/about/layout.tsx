import styles from './styles.module.css'
export default function AboutLayout({
    children,
} : {
    children: React.ReactNode
}) {
    return (
        <>
            <nav>Abvout nav</nav>
            <main className={styles.main}>{children}</main>
        </>
    )
}