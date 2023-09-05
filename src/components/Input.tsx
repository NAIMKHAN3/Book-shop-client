
import { IInput } from '../types/types';

const Input = (props: IInput) => {
    return (
        <input className={`${props.className}`} type={`${props.type}`} placeholder={`${props.placeholder}`} id={props.id} name={props.name} onChange={props.onChange} value={props.value} />
    );
};

export default Input;