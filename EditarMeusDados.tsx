import { HiOutlineUser } from "react-icons/hi";
import styles from "./page.module.css";
import { Button, Flex, Text, Image, Spacer, IconButton, Stack, Box, ButtonGroup, Wrap, WrapItem } from "@chakra-ui/react";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { NavBar } from "@/components/navbar";
import Link from "next/link";

export default function EditarMeusDados() {
  const cpf = ''
  const nome = ''
  const sobrenome = ''
  const email = ''
  const cel = ''
  const cep = ''
  const cidade = ''
  const estado = ''
  const logradouro = ''
  const num = ''
  const bairro = ''
  const com = ''

  return (
    <main className={styles.main}>
      <NavBar />

      <Stack spacing={100} direction='row' align='left'>
        <Stack spacing={2} direction='column' align='left'>
          <Button colorScheme='Gray' variant='link'>
            Orçamentos
          </Button>
          <Button 
            height='20px'
            width='65px' 
            colorScheme='Gray' 
            variant='link'
          >
            Pedidos
          </Button>
          <Text fontSize='16px' color='tomato'>
            Meus dados
          </Text>
        </Stack>
        <Text></Text> 
        <Stack spacing={5} direction='column' align='left'>
          <Text fontSize='2xl'>
            Dados Fiscais
          </Text>
          <Stack spacing={15} direction='row' align='left'>
            <Box>
              <Text>
                CPF:
              </Text>
              <input 
              type='text'
              className='input'
              name='cpf'
              value={cpf}
              placeholder='CPF'>
              </input>
              <br />
              <Text>
                Nome:
              </Text>
              <input 
              type='text'
              className='input'
              name='nome'
              value={nome}
              placeholder='Nome'>
              </input>
              <br />
              <Text>
                Sobrenome:
              </Text>
              <input 
              type='text'
              className='input'
              name='sobrenome'
              value={sobrenome}
              placeholder='Sobrenome'>
              </input>
              <br />
              <Text>
                E-mail:
              </Text>
              <input 
              type='text'
              className='input'
              name='email'
              value={email}
              placeholder='E-mail'>
              </input>
              <br />
              <Text>
                Celular:
              </Text>
              <input 
              type='text'
              className='input'
              name='cel'
              value={cel}
              placeholder='Celular'>
              </input>
            </Box>
            <Box>
            <Text>
                CEP:
              </Text>
              <input 
              type='text'
              className='input'
              name='cep'
              value={cep}
              placeholder='CEP'>
              </input>
              <br />
              <Text>
                Cidade:
              </Text>
              <input 
              type='text'
              className='input'
              name='cidade'
              value={cidade}
              placeholder='Cidade'>
              </input>
              <br />
              <Text>
                Estado:
              </Text>
              <input 
              type='text'
              className='input'
              name='estado'
              value={estado}
              placeholder='Estado'>
              </input>
              <br />
              <Text>
                Logradouro:
              </Text>
              <input 
              type='text'
              className='input'
              name='logradouro'
              value={logradouro}
              placeholder='Logradouro'>
              </input>
              <br />
              <Text>
                Número:
              </Text>
              <input 
              type='text'
              className='input'
              name='numero'
              value={num}
              placeholder='Número'>
              </input>
              <br />
              <Text>
                Bairro:
              </Text>
              <input 
              type='text'
              className='input'
              name='bairro'
              value={bairro}
              placeholder='bairro'>
              </input>
              <br />
              <Text>
                Complemento:
              </Text>
              <input 
              type='text'
              className='input'
              name='complemento'
              value={com}
              placeholder='Complemento'>
              </input>
            </Box>
          </Stack>
          <ButtonGroup variant='outline' spacing='6'>
            <Button colorScheme='blue'>Save</Button>
            <Button>Cancel</Button>
          </ButtonGroup>
        </Stack>
        <Text></Text> 
        <Text></Text> 
      </Stack>
    </main>
  );
}