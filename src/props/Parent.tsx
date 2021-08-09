import {ChildAsFC} from './Child';
const Parent = () => {
     return <ChildAsFC  color="red" onClick={() => console.log('Clicked...')}>
            Test Children here...
         </ChildAsFC>
};

export default Parent;