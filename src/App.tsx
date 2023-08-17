import { useEffect, useState } from 'react'
import Card from './components/Card/Card'

import styles from './App.module.scss'
import useInView from './hooks/useInView'

function App() {

	const [data, setData] = useState<any[]>([])
	const [page, setPage] = useState(1)

	const { ref, inView } = useInView({ thresholds: [2] })

	useEffect(() => {
		setData([...new Array(5 * page)])
	}, [page])

	useEffect(() => {
		if (inView) setPage(prev => prev + 1)
	}, [inView])

	return (
		<div className={styles.mainContainer}>
			{data.map((row: any, index: number) => {
				return <Card key={`card-${index.toString()}`} index={index} />
			})}

			<button ref={ref} className={styles.loadMore}>Load More</button>
		</div>
	)
}

export default App
