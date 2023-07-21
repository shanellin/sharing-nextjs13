import { FC } from "react";
// Components
import { MainWrapper } from "./index.styles";
import { Text } from "@components/common";
// Libs
// Styles

interface IProps {}

const ShopListingPage: FC<IProps> = () => {

  return (
    <>
      <MainWrapper background="black">
        <Text size="40px" weight="bold" color="white">
          SHOP - LISTING PAGE
        </Text>
      </MainWrapper>
    </>
  );
};

export default ShopListingPage;
