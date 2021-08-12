import Link from "next/link";
import styles from "../styles/Home.module.css"

export default function Home() {
	return (
		<div>
			<h1 className={styles.title}>Homepage</h1>
			<p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In venenatis sapien eros, quis consequat ligula dignissim nec. Maecenas sit amet cursus purus. Praesent semper porta tellus sit amet scelerisque. Nulla eros nibh, congue sed odio vel, consequat pharetra ligula. In a tincidunt dui. Integer at orci lacus. Fusce at laoreet ipsum. Sed vitae tellus lacus. Cras malesuada neque ac orci dignissim, finibus tincidunt odio accumsan. Ut pellentesque eros interdum urna auctor euismod.</p>
		<p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In venenatis sapien eros, quis consequat ligula dignissim nec. Maecenas sit amet cursus purus. Praesent semper porta tellus sit amet scelerisque. Nulla eros nibh, congue sed odio vel, consequat pharetra ligula. In a tincidunt dui. Integer at orci lacus. Fusce at laoreet ipsum. Sed vitae tellus lacus. Cras malesuada neque ac orci dignissim, finibus tincidunt odio accumsan. Ut pellentesque eros interdum urna auctor euismod.</p>
		<Link href="/ninjas">
			<a className={styles.btn}>See Ninja Listing</a>
		</Link>
		</div>
	)
}
