import { useEffect, useState } from "react";

const fmt = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Kolkata",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

export default function LiveClock({ className = "" }) {
  const [time, setTime] = useState(() => fmt.format(new Date()));

  useEffect(() => {
    const id = setInterval(() => setTime(fmt.format(new Date())), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className={className}>
      {time}
      <span className="ml-1 opacity-60">IST</span>
    </span>
  );
}
