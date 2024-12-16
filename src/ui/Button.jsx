function Button({ children, disabled, type, onClick }) {
  const base =
    "inline-block text-sm rounded-full bg-slate-800 text-white  font-semibold  tracking-wide transition-colors duration-300 hover:bg-slate-600 focus:bg-slate-600 focus:outline-none focus:ring focus:ring-slate-600 focus:ring-offset-2 disabled:cursor-not-allowed ";

  const styles = {
    primary: base + " sm:px-6 sm:py-3 px-4 py-2",
    small: base + " px-4 py-2  md:px-5  md:py-2.5 text-xs",
    round: base + " px-2.5 py-1  md:px-3.5 md:py-2 text-sm",
    xs: base + " px-2 py-1 flex gap-2 items-center ",
    secondary:
      "inline-block text-sm rounded-full text-white bg-red-600  font-semibold  tracking-wide transition-colors duration-300 hover:bg-red-400 focus:bg-red-400 focus:outline-none  focus:ring focus:ring-red-400 focus:ring-offset-2 disabled:cursor-not-allowed focus:text-slate-800 sm:px-6 sm:py-4 px-4 py-2.5 md:py-3",
  };

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
