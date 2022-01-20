import './custom-button.styles.scss';
import { CustomButtonConatiner } from './custom-button.styles';

const CustomButton=({children,...props})=>(
    <CustomButtonConatiner {...props}>
        {children}
    </CustomButtonConatiner>
)

export default CustomButton;