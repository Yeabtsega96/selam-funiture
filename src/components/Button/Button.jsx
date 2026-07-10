import "./Button.css"


const Button = ({
      children,
      onClick,
      variant = "primary", 
      size = "md", 
      className,
      type,
      disabled
    }) => {
  return (
    <button 
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${className} btn-${variant} btn-${size}`}
    >
      {children}
    </button>
  )
}

export default Button