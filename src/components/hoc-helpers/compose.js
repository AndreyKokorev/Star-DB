const compose = (...func) => (component) => {
  return func.reduceRight((prevResult, f) => f(prevResult), component)
}

export default compose;