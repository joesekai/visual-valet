export default function Tab({ Icon, label, handleClick, isSelected }) {
  const selectedStyles = isSelected
    ? "bg-sky-100 text-sky-600 hover:bg-sky-100 hover:text-sky-600"
    : "";

  return (
    <button
      onClick={handleClick}
      class={`w-1/3 py-3 bg-white rounded-md hover:bg-gray-100 text-gray-500 hover:text-gray-900 transition-colors duration-300 ${selectedStyles}`}
    >
      <i class="flex justify-center">
        <Icon size="1.3rem" />
      </i>
    </button>
  );
}
