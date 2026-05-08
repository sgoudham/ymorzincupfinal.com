import { useState } from "react";
import styles from "./index.module.css";
import { useCountdown } from "./useCountdown";

export const Countdown = ({ date }: { date: Date }) => {
	const [targetDate, _] = useState(date.getTime());
	const [days, hours, minutes, seconds] = useCountdown(targetDate);
	return (
		<div className={styles.countdown}>
			<div className={styles.time}>
				<span className={styles["time-value"]}>{days}d</span>
			</div>
			<div className={styles.time}>:</div>
			<div className={styles.time}>
				<span className={styles["time-value"]}>{hours}h</span>
			</div>
			<div className={styles.time}>:</div>
			<div className={styles.time}>
				<span className={styles["time-value"]}>{minutes}m</span>
			</div>
			<div className={styles.time}>:</div>
			<div className={styles.time}>
				<span className={styles["time-value"]}>{seconds}s</span>
			</div>
		</div>
	);
};
