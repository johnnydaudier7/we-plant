import { numericFields } from "./numericFields"

const isNumericField = (name) => {       
    return numericFields.includes(name)
}
export default isNumericField