import { useEffect, useRef, useState } from "react";

export function useCountdown(countDownDate: number, refreshRate?: number) {
	const now = Date.now();
	const firstVal = countDownDate - now;
	const [countDown, setCountDown] = useState(firstVal);
	const intervalRef = useRef<any | null>(null);

	useEffect(() => {
		const updateCountdown = () => {
			setCountDown(countDownDate - Date.now());
		};

		updateCountdown();
		intervalRef.current = setInterval(updateCountdown, refreshRate);

		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
			}
		};
	}, [countDownDate, refreshRate]);

	return getReturnValues(countDown);
}

const getReturnValues = (countDown: number) => {
	const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
	const hours = Math.floor(
		(countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
	);
	const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

	return [days, hours, minutes, seconds] as const;
};
