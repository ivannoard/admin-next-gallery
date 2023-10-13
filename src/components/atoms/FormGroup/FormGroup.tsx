import { FormType } from "../../../utils/types";
import { capitalizeWord } from "../../../utils/words";
import "./form-group.scss";

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
