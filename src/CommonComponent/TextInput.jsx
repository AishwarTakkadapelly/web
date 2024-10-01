import React from 'react';

const TextInput = ({
  id,
  name,
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  pattern,
  title
}) => {
  return (
    <div className="mb-4">
      <label className="block text-theme1-primary mb-2" htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 border border-theme1-primary rounded-lg focus:outline-none focus:ring focus:border-theme1-primary"
        placeholder={placeholder}
        required={required}
        pattern={pattern}
        title={title}
      />
    </div>
  );
};

export default TextInput;
