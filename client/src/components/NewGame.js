import { Redirect } from 'react-router-dom';

function NewGame() {
    
        let clear = () => {
            localStorage.clear()
        }
        return (
            {clear}
        )
}
export default NewGame