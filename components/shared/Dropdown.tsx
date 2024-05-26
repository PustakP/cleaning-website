import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { categories } from "@/constants"
  
  type DropdownProps = {
    value?: string
    onChangeHandler?: () => void
  }
  
  const Dropdown = ({ value, onChangeHandler }: DropdownProps) => {

  
    return (
      <Select onValueChange={onChangeHandler} defaultValue={value}>
        <SelectTrigger className="select-field">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((category) => (
            <SelectItem key={category._id} value={category.name} className="select-item p-regular-14">
              {category.name}
            </SelectItem>
          ))}

        </SelectContent>
      </Select>
    )
  }
  
  export default Dropdown