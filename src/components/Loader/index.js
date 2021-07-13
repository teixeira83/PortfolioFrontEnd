import styled from 'styled-components';

export default function Loader() {


    const Loader = styled.div`
    
        width: 50px;
        height: 50px;
        border: 10px solid #EEE8AA;
        border-bottom-color: rebeccapurple;
        border-radius: 50%;
        animation: rotate 1.5s linear infinite;
        position: absolute;
        display: flex;
        left: calc(90vw / 2);
        @keyframes rotate {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }
    `

    return (
        <Loader role="alert" className="loader" />
    );
}