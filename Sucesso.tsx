import { HiOutlineUser } from "react-icons/hi";
import styles from "./page.module.css";
import { Button, Flex, Text, Image, Spacer, IconButton, Stack, Box, ButtonGroup, Wrap, WrapItem } from "@chakra-ui/react";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { NavBar } from "@/components/navbar";
import Link from "next/link";

export default function Sucesso() {
  return (
    <main className={styles.main}>
      <NavBar />

      <Stack spacing={5} direction='column' align='center'>
          <Text fontSize='5xl' color='green'>
            Sucesso!
          </Text>
          <Text fontSize='xl'>
            Sua compra foi efetuada com sucesso.
          </Text>
          <Text fontSize='xl'>
            Lembre-se: Sua pelúcia só será produzida depois da comfirmação do pagamento.
          </Text>
          <Text fontSize='xl'>
            Você pode acompanhar o andamento do seu pedido através da página meus pedidos. 
          </Text>
          <Text fontSize='xl'>
            Esse é o número do seu pedido:
          </Text>
          <Text fontSize='3xl'>
            P-209821
          </Text>
          <Button colorScheme='pink'>
            Ver Pedido
          </Button>
      </Stack>
    </main>
  );
}