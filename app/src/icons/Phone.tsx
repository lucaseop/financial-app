const Phone = ({ ...props }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    //   stroke="currentColor"
    //   xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.0044 1H8.00439C6.34754 1 5.00439 2.34315 5.00439 4V20C5.00439 21.6569 6.34754 23 8.00439 23H16.0044C17.6612 23 19.0044 21.6569 19.0044 20V4C19.0044 2.34315 17.6612 1 16.0044 1ZM16.0044 4C16.5567 4 17.0044 4.44772 17.0044 5V19C17.0044 19.5523 16.5567 20 16.0044 20H8.00439C7.45211 20 7.00439 19.5523 7.00439 19V5C7.00439 4.44772 7.45211 4 8.00439 4H16.0044Z"
        fill="#6F7FAF"

      />
    </svg>
  )
}

export default Phone
