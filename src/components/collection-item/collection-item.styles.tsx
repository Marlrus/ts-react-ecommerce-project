import styled from 'styled-components';
import CustomButtonComponent from '../custom-button/custom-button.component';

export const CollectionItemContainer = styled.div`
   width: 22vw;
   display: flex;
   flex-direction: column;
   height: 350px;
   align-items: center;
   position: relative;
`;

export const CollectionImage = styled.div`
   width: 100%;
   height: 95%;
   background-size: cover;
   background-position: center;
   margin-bottom: 5px;

   &:hover {
      opacity: 0.8;
   }
`;

export const CustomButton = styled(CustomButtonComponent)`
   width: 80%;
   opacity: 0.7;
   position: absolute;
   top: 255px;
   display: none;
`;

export const CollectionFooterContainer = styled.div`
   width: 100%;
   height: 5%;
   display: flex;
   justify-content: space-between;
   font-size: 18px;
`;

export const CollectionName = styled.span`
   width: 90%;
   margin-bottom: 15px;
`;

export const CollectionPrice = styled.span`
   width: 10%;
`;
