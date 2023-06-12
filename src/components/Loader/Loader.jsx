import { Hearts } from "react-loader-spinner";

export const Loader = () => {
        return (<>
        <Hearts
        width="200"
        height="200"
        color='#4a4452'
        wrapperStyle={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        }}
        />
        </>);
}
 