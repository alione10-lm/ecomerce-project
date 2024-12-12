import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "inline-block text-sm rounded-full bg-slate-600 text-white  font-semibold uppercase tracking-wide transition-colors duration-300 hover:bg-slate-600 focus:bg-slate-500 focus:outline-none focus:ring focus:ring-slate-600 focus:ring-offset-2 disabled:cursor-not-allowed ";

  const styles = {
    primary: base + " sm:px-6 sm:py-4 px-4 py-2",
    small: base + " px-4 py-2  md:px-5  md:py-2.5 text-xs",
    round: base + " px-2.5 py-1  md:px-3.5 md:py-2 text-sm",
    secondary:
      "inline-block text-sm rounded-full text-slate-400 border-2 border-slate-400 font-semibold uppercase tracking-wide transition-colors duration-300 hover:bg-slate-400 focus:bg-slate-300 focus:outline-none hover:text-slate-800 focus:ring focus:ring-slate-300 focus:ring-offset-2 disabled:cursor-not-allowed focus:text-slate-800 sm:px-6 sm:py-4 px-4 py-2.5 md:py-3.5",
  };
  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
