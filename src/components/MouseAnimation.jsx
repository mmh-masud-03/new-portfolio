const MouseAnimation = ({ isVisible }) => {
  return (
    <div
      className={`absolute bottom-0 left-0 right-0 ${
        isVisible ? "hidden lg:flex" : "hidden"
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-mouse w-16 h-16 mx-auto"
      >
        <rect x="6" y="3" width="12" height="18" rx="6" ry="6"></rect>
        <line x1="12" y1="7" x2="12" y2="10"></line>
        <line x1="12" y1="17" x2="12" y2="19" className="animate-bounce"></line>
      </svg>
    </div>
  );
};

export default MouseAnimation;
