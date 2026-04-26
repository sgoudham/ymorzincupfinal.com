import { useState } from "react";
import styles from "./index.module.css";
import { useCountdown } from "./useCountdown";

export const Countdown = ({ date }: { date: Date }) => {
	const [targetDate, _] = useState(date.getTime());
	const [days, hours, minutes, seconds] = useCountdown(targetDate);
	return (
		<div className={styles.countdown}>
			<div className={styles.time}>
				<span className={styles["time-value"]}>{days}</span>
				<span className={styles["time-label"]}>Days</span>
			</div>
			<div className={styles.time}>
				<span className={styles["time-value"]}>{hours}</span>
				<span className={styles["time-label"]}>Hours</span>
			</div>
			<div className={styles.time}>
				<span className={styles["time-value"]}>{minutes}</span>
				<span className={styles["time-label"]}>Minutes</span>
			</div>
			<div className={styles.time}>
				<span className={styles["time-value"]}>{seconds}</span>
				<span className={styles["time-label"]}>Seconds</span>
			</div>
		</div>
	);
};
