const Flex = ({ className,children }) => {
  return (
    <div className={`lg:flex lg:flex-wrap ${className}`}>{children}</div>
  );
}

export default Flex;