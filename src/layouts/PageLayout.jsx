const PageLayout = ({ children, title }) => {
  return (
    <div className="px-5 py-4">
      <h3 className="text-2xl mt-2 mb-10 font-semibold text-secondary">
        {title}
      </h3>
      {children}
    </div>
  )
}

export default PageLayout
