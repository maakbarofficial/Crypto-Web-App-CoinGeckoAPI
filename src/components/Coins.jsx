import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../main";
import {
  Button,
  Center,
  Container,
  HStack,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import Loader from "./Loader";
import ErrorComponent from "./ErrorComponent";
import CoinCard from "./CoinCard";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("pkr");

  const currencySymbol =
    currency === "pkr" ? "₨" : currency === "eur" ? "€" : "$";

  const changePage = (page) => {
    setPage(page);
    setLoading(true);
  };

  const btns = new Array(132).fill(1);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );

        setCoins(data);
        // console.log(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoins();
  }, [currency, page]);

  if (error) return <ErrorComponent message={"Error While Fetching Coins"} />;

  return (
    <div>
      <Container maxW={"container.xl"}>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Center>
              <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
                <HStack spacing={"4"}>
                  <Radio value="pkr">Rs</Radio>
                  <Radio value="usd">USD</Radio>
                  <Radio value="eur">EUR</Radio>
                </HStack>
              </RadioGroup>
            </Center>

            <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
              {coins.map((data) => (
                <CoinCard
                  id={data.id}
                  key={data.id}
                  name={data.name}
                  price={data.current_price}
                  img={data.image}
                  symbol={data.symbol}
                  url={data.url}
                  currencySymbol={currencySymbol}
                />
              ))}
            </HStack>
            <HStack overflowX={"auto"} w={"full"} p={"8"}>
              {btns.map((item, index) => (
                <Button
                  key={index}
                  bg={"blackAlpha.900"}
                  color={"white"}
                  onClick={() => changePage(index + 1)}
                >
                  {index + 1}
                </Button>
              ))}
            </HStack>
          </>
        )}
      </Container>
    </div>
  );
};

export default Coins;
