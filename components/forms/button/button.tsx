import { extendVariants, Button } from "@nextui-org/react"

const FormButton = extendVariants(Button, {
  variants: {
    size: {
      sm: "px-3  py-3 h-9 rounded-5 text-xs",
    },
  },
  defaultVariants: {
    size: "sm",
  },
  
})

export default FormButton
