
export default function InputField({
  placeholder,
  bgColor = 'bg-gray-200',
  textColor = 'text-black',
  onChange,
  type = 'text',
  className = '',
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className={`px-4 py-2 rounded ${bgColor} ${textColor} ${className}`}
    />
  );
}