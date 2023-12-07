import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
const GoogleIcon = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={21}
        height={20}
        fill="none"
        {...props}
    >
        <G clipPath="url(#a)">
            <Path
                fill="#fff"
                d="M20.305 10.23c0-.68-.055-1.363-.172-2.032H10.7v3.851h5.402a4.628 4.628 0 0 1-2 3.039v2.498h3.223c1.893-1.741 2.98-4.313 2.98-7.356Z"
            />
            <Path
                fill="#34A853"
                d="M10.7 20c2.697 0 4.971-.885 6.629-2.413l-3.223-2.499c-.896.61-2.054.955-3.402.955-2.61 0-4.821-1.76-5.615-4.126H1.764v2.576A10.001 10.001 0 0 0 10.7 20Z"
            />
            <Path
                fill="#FBBC04"
                d="M5.086 11.917a5.99 5.99 0 0 1 0-3.829V5.513H1.764a10.008 10.008 0 0 0 0 8.98l3.322-2.576Z"
            />
            <Path
                fill="#EA4335"
                d="M10.7 3.958a5.434 5.434 0 0 1 3.836 1.5l2.855-2.856A9.611 9.611 0 0 0 10.7.001a9.998 9.998 0 0 0-8.936 5.511l3.321 2.576c.79-2.37 3.006-4.13 5.615-4.13Z"
            />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M.5 0h20v20H.5z" />
            </ClipPath>
        </Defs>
    </Svg>
);
export default GoogleIcon;
