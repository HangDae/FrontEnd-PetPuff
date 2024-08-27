"use client";
import { HiOutlineUser } from "react-icons/hi";
import styles from "./page.module.css";
import { Button, Flex, Text, Image, Spacer, IconButton, Stack, Box, ButtonGroup, Wrap, WrapItem, Center, FormControl, FormLabel } from "@chakra-ui/react";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { NavBar } from "@/components/navbar";
import Link from "next/link";
import { Radio, RadioGroup } from '@chakra-ui/react'
import React from "react";

export default function FarzerPedidoCartao() {
  const frete = 'R$12,30'
  const total= 'R$66,30'
  const cvv= ''
  const nomet= ''
  const num= ''
  const validade= ''

  return (
    <main className={styles.main}>
      <NavBar />

      <Stack spacing={10} direction='row' align='left'>
        <Stack spacing={10} direction='column' align='left'>
          <Text fontSize='2xl'>
            Forma de Pagamento
          </Text>
          <RadioGroup value= '1'>
            <Stack>
              <Radio value='1'>
                Cratão de Crédito
              </Radio>
              <Radio value='2' isDisabled>
                PIX
              </Radio>
              <Radio value='3' isDisabled>
                Boleto Bancário
              </Radio>
            </Stack>
          </RadioGroup>
          <Box>
            <input 
              type='text'
              className='input'
              name='numero'
              value={num}
              placeholder='Número do cartão'>
            </input>
            <input 
              type='text'
              className='input'
              name='validade'
              value={validade}
              placeholder='Validade'>
            </input>
            <br />
            <br />
            <input 
              type='text'
              className='input'
              name='nometitular'
              value={nomet}
              placeholder='Nome do títular'>
            </input>
            <input 
              type='text'
              className='input'
              name='cvv'
              value={cvv}
              placeholder='cvv'>
            </input>
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
