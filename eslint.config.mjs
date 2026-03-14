import coreWebVitals from "eslint-config-next/core-web-vitals"

const config = [
  {
    ignores: [".next/**", "out/**", "build/**", "node_modules/**"],
  },
  ...coreWebVitals,
]

export default config
