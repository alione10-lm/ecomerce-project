function Error({ children }) {
  return (
    <span className="m-1 text-red-700 bg-red-100 text-xs rounded-full px-2">
      {children}
    </span>
  );
}

export default Error;
