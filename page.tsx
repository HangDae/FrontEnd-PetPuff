"use client";
import { HiOutlineUser } from "react-icons/hi";
import styles from "./page.module.css";
import { Button, Flex, Text, Image, Spacer, IconButton, Stack, Box, ButtonGroup, Wrap, WrapItem, Center, FormControl, FormLabel } from "@chakra-ui/react";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { NavBar } from "@/components/navbar";
import Link from "next/link";
import { Radio, RadioGroup } from '@chakra-ui/react'
import React from "react";

export default function PedidoACaminho1() {
  const frete = 'R$12,30'
  const total= 'R$66,30'

  return (
    <main className={styles.main}>
      <NavBar />

      <Stack spacing={10} direction='row' align='left'>
        <Stack spacing={10} direction='column' align='left'>
          <Text fontSize='2xl'>
            Forma de Pagamento
          </Text>
          <RadioGroup value= '3'>
            <Stack>
              <Radio value='1' isDisabled>
                Cratão de Crédito
              </Radio>
              <Radio value='2' isDisabled>
                PIX
              </Radio>
              <Radio value='3'>
                Boleto Bancário
              </Radio>
            </Stack>
          </RadioGroup>
          <Box>
            O boleto para o pagamento será gerado ao final da trasação. Caso o
            <br /> 
            pagamento não seja efetuado até o dia de vencimento, o pedido será
            <br />
            cancelado. O prazo para a identificação do pagamento é de até 2 dias úteis.
          </Box>
          <ButtonGroup spacing='6'>
            <Button colorScheme='pink'>Fechar Pedido</Button>
            <Button>Voltar</Button>
          </ButtonGroup>
        </Stack>
        <Stack spacing={10} direction='column' align='center'>
          <Wrap spacing={1}>
            <WrapItem>
              <Image boxSize='75px' src='https://png.pngtree.com/png-vector/20240726/ourmid/pngtree-cartoon-colorful-baby-dragon-png-image_13237225.png' alt='Dragonilda Fofinha' />
            </WrapItem>
            <WrapItem>
              <Box fontSize='sm'>
                <Text fontSize='md'>
                  Dragonilda Fofinha
                </Text>
                Tamanho: P (20 cm de altura)
                <br />
                Kit de Materiais: Kit 1
              </Box>
            </WrapItem>
          </Wrap>
          <Text>
            Valor da pelúcia:       R$54,00
          </Text>
          <Text>
            Frete:                   {frete}
          </Text>
          <Box bg='lightgray' p={5} alignItems='center'>
            Valor Total:             {total}
          </Box>
        </Stack>
      </Stack>
    </main>
  );
}
