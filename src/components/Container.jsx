const containerStyles = {
  maxWidth: '1400px',
  marginLeft: 'auto',
  marginRight: 'auto'
}
const Container = ({ children }) => {
  return <div style={containerStyles}>{children}</div>
}

export default Container
