import { useEffect, useState } from "react";

function ComingSoon() {
  const [daysLeft, setDaysLeft] = useState(15);
  useEffect(() => {
    const interval = setInterval(() => {
      setDaysLeft((prevDaysLeft) => {
        const newDaysLeft = prevDaysLeft - 1;
        localStorage.setItem("daysLeft", String(newDaysLeft));
        return newDaysLeft;
      });
    }, 86400000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <header className="header">
        <h1 className="logo">
          <a href="index.html">Coming Soon...</a>
        </h1>
      </header>
      <div className="Reminder_Sec">
        <h2 className="Line1">{daysLeft} days left</h2>
        <h3 className="Line2">ThePrimeReacts.</h3>
      </div>
    </>
  );
}

export default ComingSoon;
