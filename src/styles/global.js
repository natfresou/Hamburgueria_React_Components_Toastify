import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root{
            --color-primary:#27AE60;
            --color-secondary:#EB5757;
            --Color-grey-600:#333333;
            --Color-grey-300:#828282;
            --Color-grey-100:#E0E0E0;
            --Color-gray-0:#F5F5F5;
            --Color-negative:#E60000
            --Color-Warning:##FFCD07;
            --Color-Sucess:#168821;
            --Color-Information:#155BCB;
            --Font-primary:'Inter', sans-serif;
    }

    @media (min-width: 1400px) {
       ul {
        overflow-x: none;
        max-width: 1100px;
        flex-wrap:wrap;
        }

        section{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
     
    }
`;
