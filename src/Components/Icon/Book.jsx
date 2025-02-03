function Book({ color = "#3A3541" }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={`${color}`}
      fillOpacity="0.38"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM6 4H11V12L8.5 10.5L6 12V4Z" />
    </svg>
  );
}

export default Book;
