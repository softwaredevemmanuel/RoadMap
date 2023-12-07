import * as React from "react";
import Svg, { Path } from "react-native-svg";
const CupIcon = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        fill="none"
        {...props}
    >
        <Path
            fill="#5DB400"
            fillRule="evenodd"
            d="M2.5 2.917a.833.833 0 0 0-.833.833v10A3.333 3.333 0 0 0 5 17.083h6.667a3.335 3.335 0 0 0 3.228-2.5h.674a3.598 3.598 0 0 0 3.598-3.598V9.051c0-1.563-1.205-2.58-2.341-2.949-.58-.188-1.229-.242-1.826-.086V3.75a.833.833 0 0 0-.833-.833H2.5ZM15 8.247v4.67h.569a1.931 1.931 0 0 0 1.931-1.932V9.051c0-.592-.47-1.13-1.189-1.363-.343-.112-.664-.12-.894-.059-.212.057-.326.16-.388.303-.013.029-.029.099-.029.315Zm-1.667-3.664h-10v9.167c0 .92.747 1.666 1.667 1.666h6.667c.92 0 1.666-.746 1.666-1.666V4.583Z"
            clipRule="evenodd"
        />
    </Svg>
);
export default CupIcon;