import { FormType } from "../../utils/types";
import { capitalizeWord } from "../../utils/words";

const FormGroup = ({ labelFor, type, ...rest }: FormType) => {
  return (
    <>
      <div className="form-group">
        <label htmlFor={labelFor}>{capitalizeWord(labelFor)}</label>
        <input {...rest} type={type} id={labelFor} name={labelFor} />
      </div>
    </>
  );
};

export default FormGroup;
