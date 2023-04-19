export default function MessageLayout({
  SVG,
  title,
  description,
  buttonText,
  buttonAction,
}) {
  return (
    <div className="h-full mt-40 flex flex-col items-center justify-center text-center">
      <div className="mb-4">
        <SVG height="140px" width="140px" />
      </div>
      <h1 className="text-xl font-semibold text-gray-500 -mt-4 mb-3">
        {title}
      </h1>
      <p className="text-gray-400 mb-6">{description} </p>
      {buttonText && (
        <button
          onClick={buttonAction}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-4 rounded transition-colors duration-200"
        >
          {buttonText}
        </button>
      )}
    </div>
  );
}
