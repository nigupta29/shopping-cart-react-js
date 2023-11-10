const Button = ({ children, handleClick, type, large, disabled }) => {
  return (
    <button
      className={`btn ${large && 'btn-lg'} btn-${type}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
