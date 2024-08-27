"use client";
import { HiOutlineUser } from "react-icons/hi";
import styles from "./page.module.css";
import { Button, Flex, Text, Image, Spacer, IconButton, Stack, Box, ButtonGroup, Wrap, WrapItem, Center, FormControl, FormLabel } from "@chakra-ui/react";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { NavBar } from "@/components/navbar";
import Link from "next/link";
import { Radio, RadioGroup } from '@chakra-ui/react'
import React from "react";
import { Switch } from '@chakra-ui/react'

export default function FazerPedido2() {
  const cep = ''
  const cidade = ''
  const estado = ''
  const logradouro = ''
  const num = ''
  const bairro = ''
  const com = ''
  const [value, setValue] = React.useState('1')
  const frete = 'R$12,30'
  const total= 'R$66,30'

  return (
    <main className={styles.main}>
      <NavBar />

      <Stack spacing={10} direction='row' align='left'>
        <Stack spacing={10} direction='column' align='left'>
          <Text fontSize='2xl'>
            Dados de entrega
          </Text>
          <FormControl display='flex' alignItems='center'>
            <FormLabel htmlFor='email-alerts' mb='0'>
              Usar endereço fiscal
            </FormLabel>
            <Switch id='email-alerts' />
          </FormControl>
          <Box>
            <input 
              type='text'
              className='input'
              name='cep'
              value={cep}
              placeholder='CEP'>
            </input>
            <input 
              type='text'
              className='input'
              name='cidade'
              value={cidade}
              placeholder='Cidade'>
            </input>
            <input 
              type='text'
              className='input'
              name='estado'
              value={estado}
              placeholder='Estado'>
            </input>
            <br />
            <br />
            <input 
              type='text'
              className='input'
              name='logradouro'
              value={logradouro}
              placeholder='Logradouro'>
            </input>
            <input 
              type='text'
              className='input'
              name='numero'
              value={num}
              placeholder='Número'>
            </input>
            <br />
            <br />
            <input 
              type='text'
              className='input'
              name='bairro'
              value={bairro}
              placeholder='bairro'>
            </input>
            <input 
              type='text'
              className='input'
              name='complemento'
              value={com}
              placeholder='Complemento'>
            </input>
          </Box>
          <RadioGroup onChange={setValue} value={value}>
            <Stack>
              <Radio value='1'>
                Transportadora R$12,30 (Entrega em 8 dias úteis)
              </Radio>
              <Radio value='2'>
                PAC - Correios R$22,50 (Entrega em 8 dias úteis)
              </Radio>
              <Radio value='3'>
                CEDEX - Correios R$28,00 (Entrega em 3 dias úteis)
              </Radio>
              <Radio value='4' isDisabled>
                Entrega local R$15,00 (1 dia útil após a fabricação)
              </Radio>
              <Radio value='5' isDisabled>
                Retirada em loja Gratís (1 dia útil após a fabricação)
              </Radio>
            </Stack>
          </RadioGroup>
          <ButtonGroup spacing='6'>
            <Button colorScheme='blue'>Próximo</Button>
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
